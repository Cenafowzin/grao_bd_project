package com.emporio.grao.repository;

import com.emporio.grao.model.Loja;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class LojaRep {
    @Autowired
    private JdbcTemplate template;

    private final RowMapper<Loja> lojaMapper = (rs, rowNum) -> {
        Loja loja = new Loja();
        loja.setId_loja(rs.getInt(1));
        loja.setRua(rs.getString(2));
        loja.setCidade(rs.getString(3));
        loja.setBairro(rs.getString(4));
        loja.setNumero(rs.getInt(5));
        loja.setTelefone(rs.getString(6));

        return loja;
    };

    public void insert(Loja loja) {
        final String sql = "insert into loja (rua, cidade, bairro, numero, telefone) values (?,?,?,?,?)";

        template.update(sql,
                loja.getRua(),
                loja.getCidade(),
                loja.getBairro(),
                loja.getNumero(),
                loja.getTelefone());
    }

    public void update(Loja loja){
        final String sql = "update loja set rua = ?, cidade = ?, bairro = ?, numero = ?, telefone = ? where id_loja = ?";

        template.update(sql,
                loja.getRua(),
                loja.getCidade(),
                loja.getBairro(),
                loja.getNumero(),
                loja.getTelefone(),
                loja.getId_loja());
    }

    public void delete(int id_loja){
        final String sql = "delete from loja where id_loja = ?";

        template.update(sql, id_loja);
    }

    public Loja findLoja(int id_loja){
        final String sql = "select * from loja where id_loja = ?";

        return template.queryForObject(sql, lojaMapper, id_loja);
    }

    public List<Loja> findAll(){
        final String sql = "select * from loja";

         return template.query(sql, lojaMapper);
    }
}
