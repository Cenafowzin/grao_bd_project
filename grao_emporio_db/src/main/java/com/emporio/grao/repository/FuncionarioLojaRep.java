package com.emporio.grao.repository;

import com.emporio.grao.model.FuncionarioLoja;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FuncionarioLojaRep {

    @Autowired
    private JdbcTemplate template;

    private final RowMapper<FuncionarioLoja> FuncLojaMapper = (rs, rowNum) -> {
        FuncionarioLoja funcionarioLoja = new FuncionarioLoja();
        funcionarioLoja.setId_funcionario(rs.getInt(1));
        funcionarioLoja.setId_loja(rs.getInt(2));
        return funcionarioLoja;
    };

    public void insert (FuncionarioLoja funcionarioLoja) {
        final String sql = "insert into funcionario_loja (id_funcionario, id_loja) values (? , ?)";

        template.update(sql,
                funcionarioLoja.getId_funcionario(),
                funcionarioLoja.getId_loja());
    }

    public void update (int id_funcionario, int id_loja, FuncionarioLoja funcionarioLoja) {
        final String sql = "update funcionario_loja " +
                " set id_funcionario = ?, id_loja = ?" +
                " where (id_funcionario = ?) and (id_loja = ?)";
        template.update(sql,
                funcionarioLoja.getId_funcionario(),
                funcionarioLoja.getId_loja(),
                id_funcionario,
                id_loja);
    }

    public void delete(int id_funcionario, int id_loja) {
        final String sql = "delete from funcionario_loja where (id_funcionario = ?) and (id_loja = ?)";
        template.update(sql, id_funcionario, id_loja);
    }

    public FuncionarioLoja findFuncionarioLoja (int id_funcionario, int id_loja){
        final String sql = "select * from funcionario_loja where (id_funcionario = ?) and (id_loja = ?)";
        return template.queryForObject(sql, FuncLojaMapper, id_funcionario, id_loja);
    }

    public List<FuncionarioLoja> findAll(){
        final String sql = "select * from funcionario_loja";
        return template.query(sql, FuncLojaMapper);
    }
}
