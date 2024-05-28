package com.emporio.grao.controller;

import com.emporio.grao.model.LojaValor;
import com.emporio.grao.model.ProdutosValores;
import com.emporio.grao.repository.RelatorioRep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class RelatorioController {

    @Autowired
    RelatorioRep relatorioRep;

    @GetMapping("/vendaSum")
    public Float getSellSum(){
        return relatorioRep.findSellSum();
    }

    @GetMapping("/valoresProdutos")
    public List<ProdutosValores> getValoresProdutos(){
        return relatorioRep.findSellSumProdutos();
    }

    @GetMapping("/faturamentoLojas")
    public List<LojaValor> getFaturamentoLojas(){
        return relatorioRep.findSellSumLojas();
    }
}
