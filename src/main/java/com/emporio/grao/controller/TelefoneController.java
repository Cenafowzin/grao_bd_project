package com.emporio.grao.controller;

import com.emporio.grao.model.Telefone;
import com.emporio.grao.repository.TelefoneRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TelefoneController {

    @Autowired
    private TelefoneRep telefoneRep;

    @GetMapping("/telefones")
    public List<Telefone> getAllTelefones(){
        return telefoneRep.findAll();
    }

    @GetMapping("/telefone/{id_telefone}")
    public Telefone getTelefone(@PathVariable int id_telefone){
        return telefoneRep.findTelefone(id_telefone);
    }

    @PostMapping("/telefone")
    public  String newTelefone(@RequestBody Telefone newTelefone){
        telefoneRep.insert(newTelefone);
        return "Telefone criado";
    }

    @DeleteMapping("/telefone/{id_telefone}")
    public String deleteTelefone(@PathVariable int id_telefone){
        telefoneRep.delete(id_telefone);
        return "Telefone deletado";
    }

    @PutMapping("/telefone/{id_telefone}")
    public String editTelefone(@PathVariable int id_telefone, @RequestBody Telefone newTelefone){
        telefoneRep.update(newTelefone);
        return "telefone editado";
    }
}
