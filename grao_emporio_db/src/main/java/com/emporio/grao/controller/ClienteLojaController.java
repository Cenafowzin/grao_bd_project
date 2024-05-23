package com.emporio.grao.controller;


import com.emporio.grao.model.ClienteLoja;
import com.emporio.grao.repository.ClienteLojaRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class ClienteLojaController {

    @Autowired
    private ClienteLojaRep clienteLojaRep;

    @GetMapping("/cliente_lojas")//busca
    public List<ClienteLoja> getAllClienteLoja() {
        return clienteLojaRep.findAll();
    }

    @GetMapping("/cliente_loja/{id_cliente}/{id_loja}")
    public ClienteLoja getClienteLoja(@PathVariable int id_cliente, @PathVariable int id_loja) {
        return clienteLojaRep.findClienteLoja(id_cliente, id_loja);
    }

    @PostMapping("/cliente_loja")//inserir
    public String newClienteLoja(@RequestBody ClienteLoja newClienteLoja) {
        clienteLojaRep.insert(newClienteLoja);
        return "Cliente da loja criado";
    }

    @DeleteMapping("cliente_loja/{id_cliente}/{id_loja}")
    public String deleteClienteLoja(@PathVariable int id_cliente, @PathVariable int id_loja) {
        clienteLojaRep.delete(id_cliente, id_loja);
        return "Cliente " + id_cliente + " da loja " + id_loja + " deletado.";
    }

    @PutMapping("/cliente_loja/{id_cliente}/{id_loja}")
    public String editClienteLoja(@PathVariable int id_cliente, @PathVariable int id_loja, @RequestBody ClienteLoja newClienteLoja) {
        clienteLojaRep.update(id_cliente, id_loja, newClienteLoja);
        return "Cliente " + id_cliente + " da loja " + id_loja + "editado";
    }
}
