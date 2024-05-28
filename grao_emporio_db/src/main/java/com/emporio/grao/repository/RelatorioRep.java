package com.emporio.grao.repository;

import com.emporio.grao.model.Funcionario;
import com.emporio.grao.model.LojaValor;
import com.emporio.grao.model.ProdutosValores;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RelatorioRep {

    @Autowired
    private JdbcTemplate template;

    public Float findSellSum(){
        final String sql = "select round(sum(valor_total), 2) from pedido";

        return template.queryForObject(sql, Float.class);
    }

    public List<ProdutosValores> findSellSumProdutos(){
        final String sql = "select pp.codigo_produto, pr.descricao as produto, " +
                "round(sum(pp.quantidade * pr.valor_unitario),2) as total_valor_pedidos " +
                "from pedido_produto pp join produto pr on pp.codigo_produto = pr.codigo_barras " +
                "join pedido pd on pp.id_pedido = pd.id_pedido " +
                "group by pp.codigo_produto, pr.descricao " +
                "order by total_valor_pedidos desc";

        return template.query(sql, (rs, rowNum) -> {
            ProdutosValores produtoValor = new ProdutosValores();
            produtoValor.setCodigo_produto(rs.getString("codigo_produto"));
            produtoValor.setProduto(rs.getString("produto"));
            produtoValor.setTotal_valores_pedidos(rs.getFloat("total_valor_pedidos"));
            return produtoValor;
        });
    }

    public List<LojaValor> findSellSumLojas(){
        final String sql = "select l.bairro, round(sum(pp.quantidade * pr.valor_unitario),2) as faturamento_total" +
                " from loja l join produto_loja pl on l.id_loja = pl.id_loja " +
                "join produto pr on pl.codigo_produto = pr.codigo_barras " +
                "join pedido_produto pp on pr.codigo_barras = pp.codigo_produto " +
                "join pedido pd on pp.id_pedido = pd.id_pedido group by l.bairro " +
                "order by faturamento_total desc";

        return template.query(sql, (rs, rowNum) -> {
            LojaValor lojaValor = new LojaValor();
            lojaValor.setBairro(rs.getString("bairro"));
            lojaValor.setFaturamento_total(rs.getFloat("faturamento_total"));
            return lojaValor;
        });
    }

}
