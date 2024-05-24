import React from 'react'

export default function AddFuncionario() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-mc-6 offset-md3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Adicionar Funcionário</h2>
                <div className="mb-3">
                    <label htmlFor="Cpf" className="fomr-label">Cpf</label>
                    <input type={"text"} className="form-control" placeholder="Digite o cpf" cpf="cpf"/>

                    <label htmlFor="Nome" className="fomr-label">Nome</label>
                    <input type={"text"} className="form-control" placeholder="Digite o nome" nome="nome"/>

                    <label htmlFor="E-mail" className="fomr-label">E-mail</label>
                    <input type={"text"} className="form-control" placeholder="Digite o e-mail" email="email"/>
                    
                    <label htmlFor="Nome" className="fomr-label">Nome</label>
                    <input type={"text"} className="form-control" placeholder="Digite o nome" nome="nome"/>
                </div>
            </div>
        </div>
    </div>
  )
}
