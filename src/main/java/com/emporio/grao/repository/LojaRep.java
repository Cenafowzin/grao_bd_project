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

    public JdbcTemplate getTemplate() {
        return template;
    }

    public void setTemplate(JdbcTemplate template) {
        this.template = template;
    }

    public void save(Loja loja) {
        final String sql = "insert into loja (rua, cidade, bairro, numero, telefone) values (?,?,?,?,?)";

        template.update(sql, loja.getRua(), loja.getCidade(), loja.getBairro(), loja.getNumero(), loja.getTelefone());
    }

    public void update(Loja loja){
        final String sql = "update loja set rua = ?, cidade = ?, bairro = ?, numero = ?, telefone = ? where id_loja = ?";

        template.update(sql, loja.getRua(), loja.getCidade(),loja.getBairro(),loja.getNumero(),loja.getTelefone(),loja.getId_loja());
    }

    public void delete(Loja loja){
        final String sql = "delete from loja where id_loja = ?";

        template.update(sql, loja.getId_loja());
    }

    public List<Loja> findAll(){

        final String sql = "select * from loja";

        RowMapper<Loja> mapper = new RowMapper<Loja>() {
            @Override
            public Loja mapRow(ResultSet rs, int rowNum) throws SQLException {

                Loja a = new Loja();
                a.setId_loja(rs.getInt(1));
                a.setRua(rs.getString(2));
                a.setCidade(rs.getString(3));
                a.setBairro(rs.getString(4));
                a.setNumero(rs.getInt(5));
                a.setTelefone(rs.getString(6));

                return a;
            }
        };

        List<Loja> lojas = template.query(sql, mapper);

        return lojas;
    }
}
