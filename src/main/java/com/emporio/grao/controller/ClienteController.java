package com.emporio.grao.controller;

import com.emporio.grao.model.Cliente;
import com.emporio.grao.repository.ClienteRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClienteController {

    @Autowired
    private ClienteRep clienteRep;

    @GetMapping("/clientes")
    public List<Cliente> getAllClientes(){
        return clienteRep.findAll();
    }

    @GetMapping("/cliente/{id_cliente}")
    public Cliente getCliente(@PathVariable int id_cliente){
        return clienteRep.findCliente(id_cliente);
    }

    @PostMapping("/cliente")
    public String newCliente(@RequestBody Cliente newCliente){
        clienteRep.insert(newCliente);
        return "Cliente criado";
    }

    @DeleteMapping("/cliente/{id_cliente}")
    public String deleteCliente(@PathVariable int id_cliente){
        clienteRep.delete(id_cliente);
        return "Cliente " + id_cliente + " deletado";
    }

    @PutMapping("/cliente/{id_cliente}")
    public String editCliente(@PathVariable int id_cliente, @RequestBody Cliente newCliente){
        clienteRep.update(newCliente);
        return "Cliente " + id_cliente + " editado";
    }
}
