package com.emporio.grao.repository;

import com.emporio.grao.model.Loja;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class LojaRep {
    private JdbcTemplate template;

    @Autowired
    public void setTemplate(JdbcTemplate template) {
        this.template = template;
    }

    public void save(Loja loja) {

        String sql = "insert into loja (id_loja, rua, cidade, bairro, numero, telefone) values (?,?,?,?,?,?)";

        template.update(sql, loja.getId_loja(), loja.getRua(), loja.getCidade(), loja.getBairro(), loja.getNumero(), loja.getTelefone());
    }

    public List<Loja> findAll(){
        return new ArrayList<Loja>();
    }
}
