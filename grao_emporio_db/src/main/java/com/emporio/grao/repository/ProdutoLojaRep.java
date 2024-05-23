package com.emporio.grao.repository;



import com.emporio.grao.model.ProdutoLoja;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProdutoLojaRep {

    @Autowired
    private JdbcTemplate template;

    private final RowMapper<ProdutoLoja> ProdutoLojaMapper = (rs, rowNum) -> {
        ProdutoLoja produtoLoja = new ProdutoLoja();
        produtoLoja.setId_loja(rs.getInt(1));
        produtoLoja.setCodigo_produto(rs.getString(2));
        produtoLoja.setQuantidade(rs.getInt(3));
        return produtoLoja;
    };
    public void insert (ProdutoLoja produtoLoja) {
        final String sql = "insert into produto_loja (id_loja, codigo_produto, quantidade) values (?, ?, ?)";
        template.update(sql, produtoLoja.getId_loja(), produtoLoja.getCodigo_produto(), produtoLoja.getQuantidade());
    }
    public void update (int id_loja, String codigo_produto, ProdutoLoja produtoLoja){
        final String sql = "update produto_loja " +
                " set id_loja = ?, codigo_produto = ?, quantidade = ?" +
                " where (id_loja = ?) and (codigo_produto = ?)";
        template.update(sql, produtoLoja.getId_loja(), produtoLoja.getCodigo_produto(),
                produtoLoja.getQuantidade(), id_loja, codigo_produto);
    }

    public void delete(int id_loja, String codigo_produto){
        final String sql = "delete from produto_loja where (id_loja = ?) and (codigo_produto = ?)";
        template.update(sql, id_loja, codigo_produto);
    }

    public ProdutoLoja findProdutoLoja (int id_loja, String codigo_produto){
        final String sql = "select * from produto_loja where (id_loja = ?) and (codigo_produto = ?)";
        return template.queryForObject(sql, ProdutoLojaMapper, id_loja, codigo_produto);

    }

    public List<ProdutoLoja> findAll(){
        final String sql = "select * from produto_loja";
        return template.query(sql, ProdutoLojaMapper);
    }


}
