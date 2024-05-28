package com.emporio.grao.repository;

import com.emporio.grao.model.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ClienteRep {

    @Autowired
    private JdbcTemplate template;

    private final RowMapper<Cliente> ClienteMapper = (rs, rowNum) -> {
        Cliente cliente = new Cliente();
        cliente.setId_cliente(rs.getInt(1));
        cliente.setCpf(rs.getString(2));
        cliente.setNome(rs.getString(3));
        cliente.setTelefone(rs.getString(4));
        cliente.setPontos_fidelidade(rs.getInt(5));
        cliente.setFidelizado(rs.getBoolean(6));

        return cliente;
    };

    public void insert(Cliente cliente){
        final String sql = "insert into cliente (cpf, nome, telefone, pontos_fidelidade, fidelizado) values (?,?,?,?,?)";

        template.update(sql,
                cliente.getCpf(),
                cliente.getNome(),
                cliente.getTelefone(),
                cliente.getPontos_fidelidade(),
                cliente.isFidelizado());
    }

    public void update(int id_cliente, Cliente cliente){
        final String sql = "update cliente " +
                "set cpf = ?, nome = ?, telefone = ?, pontos_fidelidade = ?, fidelizado = ? " +
                "where id_cliente = ?";

        template.update(sql,
                cliente.getCpf(),
                cliente.getNome(),
                cliente.getTelefone(),
                cliente.getPontos_fidelidade(),
                cliente.isFidelizado(),
                id_cliente);
    }

    public void delete(int id_cliente){
        final String sql = "delete from cliente where id_cliente = ?";

        template.update(sql, id_cliente);
    }

    public Cliente findCliente(int id_cliente){
        final String sql = "select * from cliente where id_cliente = ?";

        return template.queryForObject(sql, ClienteMapper, id_cliente);
    }

    public Cliente findClienteByCpf(String cpf){
        final String sql = "select * from cliente where cpf = ?";

        return template.queryForObject(sql, ClienteMapper, cpf);
    }

    public Cliente findClienteNull(){
        final String sql = "select * from cliente where cpf is null";
        try {
            return template.queryForObject(sql, ClienteMapper);
        } catch (org.springframework.dao.EmptyResultDataAccessException ex) {
            return null;
        }
    }

    public Cliente findOrCreateClienteNull() {
        Cliente clienteNull = findClienteNull();
        if (clienteNull == null) {
            Cliente novoCliente = new Cliente();
            novoCliente.setCpf(null);
            insert(novoCliente);

            return novoCliente;
        } else {
            return clienteNull;
        }
    }

    public List<Cliente> findAll(){
        final String sql = "select * from cliente";

        return template.query(sql, ClienteMapper);
    }

    public List<Cliente> findAllLoja(int id_loja){
        final String sql = "select * from cliente c, cliente_loja cl where c.id_cliente = cl.id_cliente and cl.id_loja = ?";

        return template.query(sql, ClienteMapper, id_loja);
    }
}
