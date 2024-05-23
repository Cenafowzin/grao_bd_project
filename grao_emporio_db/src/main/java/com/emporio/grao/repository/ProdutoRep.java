package com.emporio.grao.repository;

import com.emporio.grao.model.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProdutoRep {
    @Autowired
    private JdbcTemplate template;

    private final RowMapper<Produto> ProdutoMapper = (rs, rowNum) -> {
        Produto produto = new Produto();
        produto.setCodigo_barras(rs.getString(1));
        produto.setDescricao(rs.getString(2));
        produto.setValor_unitario(rs.getFloat(3));

        return produto;
    };

    public void insert(Produto produto){
        final String sql = "insert into produto (codigo_barras, descricao, valor_unitario) values (?, ?, ?)";

        template.update(sql,
                produto.getCodigo_barras(),
                produto.getDescricao(),
                produto.getValor_unitario());
    }

    public void update(String codigo_barras, Produto produto){
        final String sql = "update produto set codigo_barras = ?, descricao = ?, valor_unitario = ? where codigo_barras = ?";

        template.update(sql,
                produto.getCodigo_barras(),
                produto.getDescricao(),
                produto.getValor_unitario(),
               codigo_barras);
    }

    public void delete(String codigo_barras){
        final String sql = "delete from produto where codigo_barras = ?";

        template.update(sql, codigo_barras);
    }

    public Produto findoProduto(String codigo_barras){
        final String sql = "select * from produto where codigo_barras = ?";

        return template.queryForObject(sql, ProdutoMapper, codigo_barras);
    }

    public List<Produto> findAll(){
        final String sql = "select * from produto";

        return template.query(sql, ProdutoMapper);
    }
}
