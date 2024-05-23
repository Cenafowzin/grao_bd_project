package com.emporio.grao.model;

import org.springframework.stereotype.Component;

@Component
public class ProdutoLoja {
    private int id_loja;
    private String codigo_produto;
    private int quantidade;

    public int getId_loja(){
        return id_loja;
    }
    public void setId_loja(int id_loja) {
        this.id_loja = id_loja;
    }

    public String getCodigo_produto() {
        return codigo_produto;
    }
    public void setCodigo_produto(String codigo_produto){
        this.codigo_produto=codigo_produto;
    }

    public int getQuantidade(){
        return quantidade;
    }
    public void setQuantidade(int quantidade){
        this.quantidade=quantidade;
    }
}
