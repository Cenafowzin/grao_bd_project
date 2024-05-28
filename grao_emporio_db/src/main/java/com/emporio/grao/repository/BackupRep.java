package com.emporio.grao.repository;

import com.emporio.grao.model.BkFuncionario;
import com.emporio.grao.model.BkPedido;
import com.emporio.grao.model.BkProduto;
import com.emporio.grao.model.BkVenda;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;


@Repository
public class BackupRep {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    public BackupRep(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // Métodos para acessar os dados de backup, por exemplo:
    public List<BkFuncionario> getFuncionariosBackup() {
        String sql = "SELECT * FROM bk_funcionario";  // Supondo que a tabela de backup seja 'bk_funcionario'
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            BkFuncionario funcionario = new BkFuncionario();
            funcionario.setId_funcionario(rs.getInt(1));
            funcionario.setId_gerente(rs.getInt(2));
            funcionario.setCpf(rs.getString(3));
            funcionario.setNome(rs.getString(4));
            funcionario.setEmail(rs.getString(5));
            funcionario.setRua(rs.getString(6));
            funcionario.setCidade(rs.getString(7));
            funcionario.setBairro(rs.getString(8));
            funcionario.setNumero(rs.getInt(9));
            funcionario.setSalario(rs.getFloat(10));
            funcionario.setCargo(rs.getString(11));
            Timestamp timestamp = rs.getTimestamp(12);
            if (timestamp != null) {
                funcionario.setData_modificacao(timestamp.toLocalDateTime());
            }
            funcionario.setOperacao(rs.getString(13));
            return funcionario;
        });


    }

    public List<BkPedido> getPedidosBackup() {
        String sql = "SELECT id_pedido, data_hora, valor_total, data_modificacao, operacao FROM bk_pedido";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            BkPedido pedido = new BkPedido();
            pedido.setId_pedido(rs.getInt(1));  // Usa o nome da coluna

            Timestamp dataHora = rs.getTimestamp(2);
            if (dataHora != null) {
                pedido.setData_hora(dataHora.toLocalDateTime());
            }

            float valorTotal = rs.getFloat(3);
            if (!rs.wasNull()) {  // Checa se o último valor lido de coluna não foi nulo
                pedido.setValor_total(valorTotal);
            }

            Timestamp dataModificacao = rs.getTimestamp(4);
            if (dataModificacao != null) {
                pedido.setData_modificacao(dataModificacao.toLocalDateTime());
            }

            pedido.setOperacao(rs.getString(5));

            return pedido;
        });
    }

    public List<BkProduto> getProdutosBackup() {
        String sql = "SELECT * FROM bk_produto";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            BkProduto produto = new BkProduto();
            produto.setCodigo_barras(rs.getString(1));
            produto.setDescricao(rs.getString(2));
            produto.setValor_unitario(rs.getFloat(3));
            produto.setData_modificacao(rs.getTimestamp(4).toLocalDateTime());
            produto.setOperacao(rs.getString(5));
            return produto;
        });
    }

    public List<BkVenda> getVendasBackup() {
        String sql = "SELECT * FROM bk_venda";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            BkVenda venda = new BkVenda();
            venda.setId_funcionario(rs.getInt(1));
            venda.setId_pedido(rs.getInt(2));
            venda.setId_cliente(rs.getInt(3));
            venda.setPontos(rs.getInt(4));
            venda.setData_modificacao(rs.getTimestamp(5).toLocalDateTime());
            venda.setOperacao(rs.getString(6));
            return venda;
        });
    }
}
