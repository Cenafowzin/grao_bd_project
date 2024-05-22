package com.emporio.grao.controller;

import com.emporio.grao.model.Venda;
import com.emporio.grao.repository.VendaRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class VendaController {

    @Autowired
    private VendaRep vendaRep;

    @GetMapping("/vendas")
    public List<Venda> getAllVendas(){
        return vendaRep.findAll();
    }

    @GetMapping("/venda/{id_funcionario}/{id_pedido}/{id_cliente}")
    public Venda getVenda(@PathVariable int id_funcionario, @PathVariable int id_pedido, @PathVariable int id_cliente){
        return vendaRep.findVenda(id_funcionario,id_pedido,id_cliente);
    }

    @PostMapping("/venda")
    public String newVenda(@RequestBody Venda newVenda){
        vendaRep.insert(newVenda);
        return "Venda criada";
    }

    @DeleteMapping("/venda/{id_funcionario}/{id_pedido}/{id_cliente}")
    public String deleteVenda(@PathVariable int id_funcionario, @PathVariable int id_pedido, @PathVariable int id_cliente){
        vendaRep.delete(id_funcionario, id_pedido, id_cliente);
        return "Venda deletada";
    }

    @PutMapping("/venda/{id_funcionario}/{id_pedido}/{id_cliente}")
    public String editVenda(@PathVariable int id_funcionario, @PathVariable int id_pedido, @PathVariable int id_cliente, @RequestBody Venda newVenda){
        vendaRep.update(id_funcionario, id_pedido, id_cliente, newVenda);
        return "Venda do funcionario" + id_funcionario + " o pedido " + id_pedido + " com o cliente " + id_cliente + " foi editada";
    }
}
