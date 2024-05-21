package com.emporio.grao.model;

public enum Cargo {
    VENDEDOR (1, "VENDEDOR"),
    ESTOQUISTA (2, "ESTOQUISTA");

    private int codigo;
    private String nome;
    private Cargo(int codigo,  String nome){
        this.codigo = codigo;
        this.nome = nome;
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public static Cargo getCargo(int codigo){
        for (Cargo cargo : Cargo.values()){
            if(cargo.codigo == codigo){
                return cargo;
            }
        }
        return null;
    }
}
