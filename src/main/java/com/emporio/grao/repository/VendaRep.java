package com.emporio.grao.repository;

import com.emporio.grao.model.Venda;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class VendaRep {

    @Autowired
    private JdbcTemplate template;

    private final RowMapper<Venda> VendaMapper = (rs, rowNum) -> {
        Venda venda = new Venda();
        venda.setId_funcionario(rs.getInt(1));
        venda.setId_pedido(rs.getInt(2));
        venda.setId_cliente(rs.getInt(3));
        venda.setPontos(rs.getInt(4));

        return venda;
    };

    public void insert(Venda venda){
        final String sql = "insert into venda (id_funcionario, id_pedido, id_cliente, pontos) values (?,?,?,?)";

        template.update(sql,
                venda.getId_funcionario(),
                venda.getId_pedido(),
                venda.getId_cliente(),
                venda.getPontos());
    }

    public void update(int id_funcionario, int id_pedido, int id_cliente, Venda venda){
        final String sql = "update venda set id_funcionario = ?, id_pedido = ?, id_cliente = ?, pontos = ? " +
                "where (id_funcionario = ?) and (id_pedido = ?) and (id_cliente = ?)";

        template.update(sql,
                venda.getId_funcionario(),
                venda.getId_pedido(),
                venda.getId_cliente(),
                venda.getPontos(),
                id_funcionario,
                id_pedido,
                id_cliente);
    }

    public void delete(int id_funcionario, int id_pedido, int id_cliente){
        final String sql = "delete from venda where (id_funcionario = ?) and (id_pedido = ?) and (id_cliente = ?)";

        template.update(sql, id_funcionario, id_pedido, id_cliente);
    }

    public Venda findVenda(int id_funcionario, int id_pedido, int id_cliente){
        final String sql = "select * from venda where (id_funcionario = ?) and (id_pedido = ?) and (id_cliente = ?)";

        return template.queryForObject(sql, VendaMapper, id_funcionario, id_pedido, id_cliente);
    }

    public List<Venda> findAll(){
        final String sql = "select * from venda";

        return template.query(sql, VendaMapper);
    }
}
