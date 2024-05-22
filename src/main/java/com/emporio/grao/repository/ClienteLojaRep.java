package com.emporio.grao.repository;

import com.emporio.grao.model.ClienteLoja;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ClienteLojaRep {

    @Autowired
    private JdbcTemplate template;

    private final RowMapper<ClienteLoja> ClienteLojaMapper = (rs, rowNum) -> {
        ClienteLoja clienteLoja = new ClienteLoja();
        clienteLoja.setId_cliente(rs.getInt(1));
        clienteLoja.setId_loja(rs.getInt(2));
        return clienteLoja;
    };
    public void insert (ClienteLoja clienteloja) {
        final String sql = "insert into cliente_loja (id_cliente, id_loja) values (? , ?)";
        template.update(sql, clienteloja.getId_cliente(), clienteloja.getId_loja());
    }

    public void update (int id_cliente, int id_loja, ClienteLoja clienteLoja) {
        final String sql = "update cliente_loja " +
                " set id_cliente = ?, id_loja =  ?" +
                " where (id_cliente = ?) and (id_loja = ?)";
        template.update(sql, clienteLoja.getId_cliente(), clienteLoja.getId_loja(),
                id_cliente, id_loja);
    }

    public void delete (int id_cliente, int id_loja){
        final String sql = "delete from cliente_loja where (id_cliente = ?) and (id_loja = ?)";
        template.update(sql, id_cliente, id_loja);
    }

    public ClienteLoja findClienteLoja (int id_cliente, int id_loja){
        final String sql = "select * from cliente_loja where (id_cliente = ?) and (id_loja = ?)";
        return template.queryForObject(sql, ClienteLojaMapper, id_cliente, id_loja);
    }

    public List<ClienteLoja> findAll(){
        final String sql = "select * from cliente_loja";
        return template.query(sql, ClienteLojaMapper);
    }

}
