package com.emporio.grao.model;

import org.springframework.stereotype.Component;

@Component
public class Telefone {
    private int id_telefone;
    private int id_funcionario;
    private String numero;

    public int getId_telefone() {
        return id_telefone;
    }

    public void setId_telefone(int id_telefone) {
        this.id_telefone = id_telefone;
    }

    public int getId_funcionario() {
        return id_funcionario;
    }

    public void setId_funcionario(int id_funcionario) {
        this.id_funcionario = id_funcionario;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }
}
