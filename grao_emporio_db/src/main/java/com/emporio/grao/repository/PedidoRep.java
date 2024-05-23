package com.emporio.grao.repository;

import com.emporio.grao.model.Pedido;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;

@Repository
public class PedidoRep {

    @Autowired
    private JdbcTemplate template;

    private final RowMapper<Pedido> PedidoMapper = (rs, rowNum) -> {
        Pedido pedido = new Pedido();
        pedido.setId_pedido(rs.getInt(1));
        Timestamp timestamp = rs.getTimestamp(2);
        if (timestamp != null) {
            pedido.setData(timestamp.toLocalDateTime());
        }
        pedido.setValor_total(rs.getFloat(3));
        return pedido;
    };

    public void insert(Pedido pedido){
        final String sql = "insert into pedido (valor_total) values (?)";

        template.update(sql, pedido.getValor_total());
    }

    public void update(int id_pedido, Pedido pedido){
        final String sql = "update pedido set id_pedido = ?, data_hora = ?, valor_total = ? where id_pedido = ?";

        template.update(sql,
                pedido.getId_pedido(),
                Timestamp.valueOf(pedido.getData()),
                pedido.getValor_total(),
                id_pedido);
    }

    public void delete(int id_pedido){
        final String sql = "delete from pedido where id_pedido = ?";

        template.update(sql, id_pedido);
    }

    public Pedido findPedido(int id_pedido){
        final String sql = "select * from pedido where id_pedido = ?";

        return template.queryForObject(sql, PedidoMapper, id_pedido);
    }

    public List<Pedido> findAll(){
        final String sql = "select * from pedido";

        return template.query(sql, PedidoMapper);
    }
}
