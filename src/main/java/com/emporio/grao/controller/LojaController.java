package com.emporio.grao.controller;

import com.emporio.grao.model.Loja;
import com.emporio.grao.repository.LojaRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LojaController {

    @Autowired
    private LojaRep lojaRepository;

    @GetMapping("/lojas")
    List<Loja> getAllLojas(){
        return lojaRepository.findAll();
    }

}
