package com.emporio.grao.controller;

import com.emporio.grao.model.Pedido;
import com.emporio.grao.repository.PedidoRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PedidoController {

    @Autowired
    private PedidoRep pedidoRep;

    @GetMapping("/pedidos")
    public List<Pedido> getAllPedidos(){
        return pedidoRep.findAll();
    }

    @GetMapping("/pedido/{id_pedido}")
    public Pedido getPedido(@PathVariable int id_pedido){
        return pedidoRep.findPedido(id_pedido);
    }

    @PostMapping("/pedido")
    public String newPedido(@RequestBody Pedido newPedido){
        pedidoRep.insert(newPedido);
        return  "Pedido criado";
    }

    @DeleteMapping("/pedido/{id_pedido}")
    public String deletePedido(@PathVariable int id_pedido){
        pedidoRep.delete(id_pedido);
        return "Pedio deletado";
    }

    @PutMapping("/pedido/{id_pedido}")
    public String editPedido(@PathVariable int id_pedido, @RequestBody Pedido newPedido){
        pedidoRep.update(id_pedido, newPedido);
        return "Pedio " + id_pedido + " editado";
    }
}
