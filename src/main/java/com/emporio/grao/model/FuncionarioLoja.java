package com.emporio.grao.model;

import org.springframework.stereotype.Component;

@Component
public class FuncionarioLoja {
    private int id_funcionario;
    private int id_loja;

    public int getId_funcionario() {
        return id_funcionario;
    }

    public void setId_funcionario(int id_funcionario) {
        this.id_funcionario = id_funcionario;
    }

    public int getId_loja() {
        return id_loja;
    }

    public void setId_loja(int id_loja) {
        this.id_loja = id_loja;
    }
}
