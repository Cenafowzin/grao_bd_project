package com.emporio.grao.controller;

import com.emporio.grao.model.Funcionario;
import com.emporio.grao.repository.FuncionarioRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class FuncionarioController {

    @Autowired
    private FuncionarioRep funcRep;

    @GetMapping("/funcionarios")
    public List<Funcionario> getAllFuncs(){
        return funcRep.findAll();
    }

    @GetMapping("/funcionario/{id_funcionario}")
    public Funcionario getFuncionarioById(@PathVariable int id_funcionario){
        return funcRep.findFunc(id_funcionario);
    }

    @GetMapping("/funcionarioCpf/{cpf}")
    public Funcionario getFuncionarioByCpf(@PathVariable String cpf){
        return funcRep.findFuncByCpf(cpf);
    }

    @GetMapping("/funcionarioEmail/{email}")
    public Funcionario getFuncionarioByEmail(@PathVariable String email){
        return funcRep.findFuncByEmail(email);
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