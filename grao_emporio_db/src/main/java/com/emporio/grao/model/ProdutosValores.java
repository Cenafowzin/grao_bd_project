package com.emporio.grao.model;

import org.springframework.stereotype.Component;

@Component
public class ProdutosValores {
    private String codigo_produto;
    private String produto;
    private float total_valores_pedidos;

    public String getCodigo_produto() {
        return codigo_produto;
    }

    public void setCodigo_produto(String codigo_produto) {
        this.codigo_produto = codigo_produto;
    }

    public String getProduto() {
        return produto;
    }

    public void setProduto(String produto) {
        this.produto = produto;
    }

    public float getTotal_valores_pedidos() {
        return total_valores_pedidos;
    }

    public void setTotal_valores_pedidos(float total_valores_pedidos) {
        this.total_valores_pedidos = total_valores_pedidos;
    }
}
