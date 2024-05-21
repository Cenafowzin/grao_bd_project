package com.emporio.grao.repository;

import com.emporio.grao.model.Funcionario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FuncionarioRep {
    @Autowired
    private JdbcTemplate template;

    private final RowMapper<Funcionario> FuncMapper = (rs, rowNum) -> {
        Funcionario funcionario = new Funcionario();
        funcionario.setId_funcionario(rs.getInt(1));
        funcionario.setId_gerente(rs.getInt(2));
        funcionario.setCpf(rs.getString(3));
        funcionario.setNome(rs.getString(4));
        funcionario.setEmail(rs.getString(5));
        funcionario.setRua(rs.getString(6));
        funcionario.setCidade(rs.getString(7));
        funcionario.setBairro(rs.getString(8));
        funcionario.setNumero(rs.getInt(9));
        funcionario.setSalario(rs.getFloat(10));
        funcionario.setCargo(rs.getString(11));

        return funcionario;
    };

    public void insert(Funcionario funcionario){
        final String sql = "insert into funcionario (id_gerente,cpf,nome,email,rua,cidade,bairro,numero,salario,cargo) values (?,?,?,?,?,?,?,?,?,?)";

        template.update(sql,
                funcionario.getId_gerente() == 0 ? null : funcionario.getId_gerente(),
                funcionario.getCpf(),
                funcionario.getNome(),
                funcionario.getEmail(),
                funcionario.getRua(),
                funcionario.getCidade(),
                funcionario.getBairro(),
                funcionario.getNumero(),
                funcionario.getSalario(),
                funcionario.getCargo());
    }

    public void update(Funcionario funcionario){
        final String sql = "update funcionario " +
                "set id_gerente = ?,cpf = ?,nome = ?,email = ?,rua = ?,cidade = ?,bairro = ?,numero = ?,salario = ?,cargo = ? " +
                "where id_funcionario = ?";

        template.update(sql,
                funcionario.getId_gerente() == 0 ? null : funcionario.getId_gerente(),
                funcionario.getCpf(),
                funcionario.getNome(),
                funcionario.getEmail(),
                funcionario.getRua(),
                funcionario.getCidade(),
                funcionario.getBairro(),
                funcionario.getNumero(),
                funcionario.getSalario(),
                funcionario.getCargo(),
                funcionario.getId_funcionario());
    }

    public void delete(int id_funcionario){
        final String sql = "delete from funcionario where id_funcionario = ?";

        template.update(sql, id_funcionario);
    }

    public Funcionario findFunc(int id_funcionario){
        final String sql = "select * from funcionario where id_funcionario = ?";

        return template.queryForObject(sql, FuncMapper, id_funcionario);
    }

    public List<Funcionario> findAll(){
        final String sql = "select * from funcionario";

        return template.query(sql, FuncMapper);
    }
}