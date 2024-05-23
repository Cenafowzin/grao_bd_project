package com.emporio.grao.controller;

import com.emporio.grao.model.FuncionarioLoja;
import com.emporio.grao.repository.FuncionarioLojaRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FuncLojaController {

    @Autowired
    private FuncionarioLojaRep funcionarioLojaRep;

    @GetMapping("/funcionario_lojas") //pegar, buscar
    public List<FuncionarioLoja> getAllFuncionarioLojas() {return funcionarioLojaRep.findAll();}

    @GetMapping("/funcionario_loja/{id_funcionario}/{id_loja}")
    public FuncionarioLoja getFuncionarioLoja(@PathVariable int id_funcionario, @PathVariable int id_loja){
        return funcionarioLojaRep.findFuncionarioLoja(id_funcionario, id_loja);
    }

    @PostMapping("/funcionario_loja") //inserir
    public String newFuncionarioLoja(@RequestBody FuncionarioLoja newFuncionarioLoja){
        funcionarioLojaRep.insert(newFuncionarioLoja);
        return "Funcionario da loja criado";
    }

    @DeleteMapping("funcionario_loja/{id_funcionario}/{id_loja}")
    public String deleteFuncionarioLoja(@PathVariable int id_funcionario, @PathVariable int id_loja){
        funcionarioLojaRep.delete(id_funcionario, id_loja);
        return "Funcionário " + id_funcionario + ", vinculado a loja " + id_loja + " deletado";
    }

    @PutMapping("/funcionario_loja/{id_funcionario}/{id_loja}") //editar
    public String editFuncionarioLoja(@PathVariable int id_funcionario, @PathVariable int id_loja, @RequestBody FuncionarioLoja newFuncionarioLoja){
        funcionarioLojaRep.update(id_funcionario, id_loja, newFuncionarioLoja);
        return "Funcionário " + id_funcionario + " da loja " + id_loja + " editado";
    }
}
