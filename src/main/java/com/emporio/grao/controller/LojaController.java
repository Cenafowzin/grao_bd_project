package com.emporio.grao.controller;

import com.emporio.grao.model.Loja;
import com.emporio.grao.repository.LojaRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LojaController {

    @Autowired
    private LojaRep lojaRepository;

    @GetMapping("/lojas")
    public List<Loja> getAllLojas(){
        return lojaRepository.findAll();
    }

    @GetMapping("/loja/{id_loja}")
    public Loja getLoja(@PathVariable int id_loja){
        return lojaRepository.findLoja(id_loja);
    }

    @PostMapping("/loja")
    public String newLoja(@RequestBody Loja newLoja){
        lojaRepository.insert(newLoja);
        return "Loja criada";
    }

    @DeleteMapping("/loja/{id_loja}")
    public String deleteLoja(@PathVariable int id_loja){
        lojaRepository.delete(id_loja);
        return "Loja " + id_loja + " deletada";
    }

    @PutMapping("/loja/{id_loja}")
    public String editLoja(@PathVariable int id_loja, @RequestBody Loja newLoja){
        lojaRepository.update(newLoja);
        return "Loja " + id_loja + " editada";
    }
}
