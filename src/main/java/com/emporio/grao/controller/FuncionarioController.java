package com.emporio.grao.controller;

import com.emporio.grao.model.Funcionario;
import com.emporio.grao.repository.FuncionarioRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FuncionarioController {

    @Autowired
    private FuncionarioRep funcRep;

    @GetMapping("/funcionarios")
    public List<Funcionario> getAllFuncs(){
        return funcRep.findAll();
    }

    @GetMapping("/funcionario/{id_funcionario}")
    public Funcionario getFuncionario(@PathVariable int id_funcionario){
        return funcRep.findFunc(id_funcionario);
    }

    @PostMapping("/funcionario")
    public String newFuncionario(@RequestBody Funcionario newFuncionario){
        funcRep.insert(newFuncionario);
        return  "Funcionario criado";
    }

    @DeleteMapping("/funcionario/{id_funcionario}")
    public String deleteFuncionario(@PathVariable int id_funcionario){
        funcRep.delete(id_funcionario);
        return "Funcionario " + id_funcionario + " deletado";
    }

    @PutMapping("/funcionario/{id_funcionario}")
    public String editFuncionario(@PathVariable int id_funcionario, @RequestBody Funcionario newFuncionario){
        funcRep.update(id_funcionario, newFuncionario);
        return "Funcionario" + id_funcionario + " editado";
    }
}