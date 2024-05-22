package com.emporio.grao.model;

import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class Pedido {
    private int id_pedido;
    private LocalDateTime data;
    private float valor_total;

    public int getId_pedido() {
        return id_pedido;
    }

    public void setId_pedido(int id_pedido) {
        this.id_pedido = id_pedido;
    }

    public LocalDateTime getData() {
        return data;
    }

    public void setData(LocalDateTime data) {
        this.data = data;
    }

    public float getValor_total() {
        return valor_total;
    }

    public void setValor_total(float valor_total) {
        this.valor_total = valor_total;
    }
}
