package com.emporio.grao.model;

import org.springframework.stereotype.Component;

@Component
public class PedidoProduto {
    private String codigo_produto;
    private int id_pedido;
    private int quantidade;

    public String getCodigo_produto(){
        return codigo_produto;
    }
    public void setCodigo_produto(String codigo_produto){
        this.codigo_produto=codigo_produto;
    }
    public int getId_pedido(){
        return id_pedido;
    }
    public void setId_pedido(int id_pedido){
        this.id_pedido=id_pedido;
    }
    public int getQuantidade(){
        return quantidade;
    }
    public void setQuantidade(int quantidade){
        this.quantidade=quantidade;
    }
}
