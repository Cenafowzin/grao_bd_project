package com.emporio.grao.model;

import org.springframework.stereotype.Component;

@Component
public class Cliente {
    private int id_cliente;
    private String cpf;
    private String nome;
    private String telefone;
    private int pontos_fidelidade;
    private boolean fidelizado;

    public int getId_cliente() {
        return id_cliente;
    }

    public void setId_cliente(int id_cliente) {
        this.id_cliente = id_cliente;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public int getPontos_fidelidade() {
        return pontos_fidelidade;
    }

    public void setPontos_fidelidade(int pontos_fidelidade) {
        this.pontos_fidelidade = pontos_fidelidade;
    }

    public boolean isFidelizado() {
        return fidelizado;
    }

    public void setFidelizado(boolean fidelizado) {
        this.fidelizado = fidelizado;
    }
}
