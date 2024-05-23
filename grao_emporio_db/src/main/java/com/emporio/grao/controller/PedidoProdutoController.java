package com.emporio.grao.controller;


import com.emporio.grao.model.PedidoProduto;
import com.emporio.grao.repository.PedidoProdutoRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PedidoProdutoController {
    @Autowired
    private PedidoProdutoRep pedidoProdutoRep;

    @GetMapping("/pedido_produto")//busca
    public List<PedidoProduto> getAllPedidoProduto(){
        return pedidoProdutoRep.findAll();
    }

    @GetMapping("/pedido_produto/{codigo_produto}/{id_pedido}")
    public PedidoProduto getPedidoProduto(@PathVariable String codigo_produto, @PathVariable int id_pedido){
        return pedidoProdutoRep.findPedidoProduto(codigo_produto, id_pedido);
    }

    @PostMapping("/pedido_produto")//inserir
    public String newPedidoProduto(@RequestBody PedidoProduto newPedidoProduto){
        pedidoProdutoRep.insert(newPedidoProduto);
        return "Pedido do produto criado";
    }
    @DeleteMapping ("/pedido_produto/{codigo_produto}/{id_pedido}")
    public String deletePedidoProduto(@PathVariable String codigo_produto, @PathVariable int id_pedido){
        pedidoProdutoRep.delete(codigo_produto, id_pedido);
        return "Pedido " + id_pedido + "apagado.";
    }

    @PutMapping("/pedido_produto/{codigo_produto}/{id_pedido}")
    public String editPedidoProduto(@PathVariable String codigo_produto, @PathVariable int id_pedido, @RequestBody PedidoProduto newPedidoProduto){
        pedidoProdutoRep.update(codigo_produto, id_pedido, newPedidoProduto);
        return "Pedido atualizado. Pedido n. " + id_pedido;
    }
}
