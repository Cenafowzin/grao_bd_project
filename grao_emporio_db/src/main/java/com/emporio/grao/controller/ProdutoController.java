package com.emporio.grao.controller;

import com.emporio.grao.model.Produto;
import com.emporio.grao.repository.ProdutoRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ProdutoController {

    @Autowired
    private ProdutoRep produtoRep;

    @GetMapping("/produtos")
    public List<Produto> getAllProdutos(){
        return produtoRep.findAll();
    }

    @GetMapping("/produtos/{id_loja}")
    public List<Produto> getAllProdutosLoja(@PathVariable int id_loja){
        return produtoRep.findAllLoja(id_loja);
    }

    @GetMapping("/produto/{codigo_barras}")
    public Produto getProduto(@PathVariable String codigo_barras){
        return  produtoRep.findoProduto(codigo_barras);
    }

    @PostMapping("/produto")
    public String newProduto(@RequestBody Produto newProduto){
        produtoRep.insert(newProduto);
        return "Produto criado";
    }

    @DeleteMapping("/produto/{codigo_barras}")
    public String deleteProduto(@PathVariable String codigo_barras){
        produtoRep.delete(codigo_barras);
        return "Produto " + codigo_barras + " deletado";
    }

    @PutMapping("/produto/{codigo_barras}")
    public String editProduto(@PathVariable String codigo_barras, @RequestBody Produto newProduto){
        produtoRep.update(codigo_barras, newProduto);
        return "Produto" + codigo_barras + " editado";
    }
}
