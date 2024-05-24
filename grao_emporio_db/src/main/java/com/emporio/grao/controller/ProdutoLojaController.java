package com.emporio.grao.controller;


import com.emporio.grao.model.ProdutoLoja;
import com.emporio.grao.repository.ProdutoLojaRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProdutoLojaController {
    @Autowired
    private ProdutoLojaRep produtoLojaRep;

    @GetMapping("/produto_lojas")//busca
    public List<ProdutoLoja> getAllProdutoLoja(){
        return produtoLojaRep.findAll();
    }

    @GetMapping ("/produto_loja/{id_loja}/{codigo_produto}")
    public ProdutoLoja getProdutoLoja(@PathVariable int id_loja, @PathVariable String codigo_produto){
        return produtoLojaRep.findProdutoLoja(id_loja, codigo_produto);
    }

    @PostMapping("/produto_loja")//inserir
    public String newProdutoLoja(@RequestBody ProdutoLoja newProdutoLoja){
        produtoLojaRep.insert(newProdutoLoja);
        return "Produto da loja criado";
    }
    @DeleteMapping ("/produto_loja/{id_loja}/{codigo_produto}")
    public String deleteProdutoLoja(@PathVariable int id_loja, @PathVariable String codigo_produto){
        produtoLojaRep.delete(id_loja, codigo_produto);
        return "Produto " + codigo_produto + " apagado da loja " + id_loja;
    }

    @PutMapping("/produto_loja/{id_loja}/{codigo_produto}")
    public String editProdutoLoja(@PathVariable int id_loja, @PathVariable String codigo_produto, @RequestBody ProdutoLoja newProdutoLoja){
        produtoLojaRep.update(id_loja, codigo_produto, newProdutoLoja);
        return "Produto atualizado: " + id_loja + codigo_produto;
    }
}
