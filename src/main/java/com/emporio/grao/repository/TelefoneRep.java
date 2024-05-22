package com.emporio.grao.repository;

import com.emporio.grao.model.Telefone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TelefoneRep {

    @Autowired
    private JdbcTemplate template;

    private final RowMapper<Telefone> TelefoneMapper = (rs, rowNUm) -> {
        Telefone telefone = new Telefone();
        telefone.setId_telefone(rs.getInt(1));
        telefone.setId_funcionario(rs.getInt(2));
        telefone.setNumero(rs.getString(3));

        return telefone;
    };

    public void insert(Telefone telefone){
        final String sql = "insert into telefone (id_funcionario, numero) values (?, ?)";

        template.update(sql,
                telefone.getId_funcionario(),
                telefone.getNumero());
    }

    public void update(int id_telefone, Telefone telefone){
        final String sql = "update telefone set id_funcionario = ?, numero = ? where id_telefone = ?";

        template.update(sql,
                telefone.getId_funcionario(),
                telefone.getNumero(),
                id_telefone);
    }

    public void delete(int id_telefone){
        final String sql = "delete from telefone where id_telefone = ?";

        template.update(sql, id_telefone);
    }

    public Telefone findTelefone(int id_telefone){
        final String sql = "select * from telefone where id_telefone = ?";

        return template.queryForObject(sql, TelefoneMapper, id_telefone);
    }

    public List<Telefone> findAll(){
        final String sql = "select * from telefone";

        return template.query(sql, TelefoneMapper);
    }
}