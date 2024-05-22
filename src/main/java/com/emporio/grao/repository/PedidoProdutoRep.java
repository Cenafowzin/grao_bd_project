package com.emporio.grao.repository;


import com.emporio.grao.model.PedidoProduto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PedidoProdutoRep {

    @Autowired
    private JdbcTemplate template;

    private final RowMapper<PedidoProduto> PedidoProdutoMapper = (rs, rowNum) -> {
        PedidoProduto pedidoProduto = new PedidoProduto();
        pedidoProduto.setCodigo_produto(rs.getString(1));
        pedidoProduto.setId_pedido(rs.getInt(2));
        pedidoProduto.setQuantidade(rs.getInt(3));
        return pedidoProduto;
    };

    public void insert (PedidoProduto pedidoProduto){
        final String sql = "insert into pedido_produto (codigo_produto, id_pedido, quantidade) values (?, ?, ?)";
        template.update(sql, pedidoProduto.getCodigo_produto(), pedidoProduto.getId_pedido(), pedidoProduto.getQuantidade());
    }
    public void update (String codigo_produto, int id_pedido, PedidoProduto pedidoProduto){
        final String sql = "update pedido_produto " +
                " set codigo_produto = ?, id_pedido = ?, quantidade = ?" +
                " where (codigo_produto = ?) and (id_pedido = ?)";
        template.update(sql,pedidoProduto.getCodigo_produto(),
                pedidoProduto.getId_pedido(), pedidoProduto.getQuantidade(),
                codigo_produto, id_pedido);
    }
    public void delete(String codigo_produto, int id_pedido){
        final String sql = "delete from pedido_produto where (codigo_produto = ?) and (id_pedido = ?)";
        template.update(sql, codigo_produto, id_pedido);
    }
    public PedidoProduto findPedidoProduto(String codigo_produto, int id_pedido) {
        final String sql = "select * from pedido_produto where (codigo_produto = ?) and (id_pedido = ?)";
        return template.queryForObject(sql, PedidoProdutoMapper, codigo_produto, id_pedido);
    }

    public List<PedidoProduto> findAll(){
        final String sql = "select * from pedido_produto";
        return template.query(sql, PedidoProdutoMapper);
    }

}
