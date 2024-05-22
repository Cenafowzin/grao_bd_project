package com.emporio.grao.model;


import org.springframework.stereotype.Component;

@Component
public class ClienteLoja {
    private int id_cliente;
    private int id_loja;

    public int getId_cliente(){
        return id_cliente;
    }

    public void setId_cliente(int id_cliente){
        this.id_cliente = id_cliente;
    }

    public int getId_loja(){
        return id_loja;
    }

    public void setId_loja(int id_loja){
        this.id_loja = id_loja;
    }
}
