import React from 'react'

export default function AddProduto() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-mc-6 offset-md3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Adicionar Produto</h2>
                <div className="mb-3">
                    <label htmlFor="codigoBarras" className="fomr-label">Código de Barras</label>
                    <input type={"text"} className="form-control" placeholder="Digite o código de barras" name="codigoBarras" id="codigoBarras"/>

                    <label htmlFor="descricaoProduto" className="fomr-label">Descrição do Produto</label>
                    <input type={"text"} className="form-control" placeholder="Digite a descrição do produto" name="descricaoProduto" id="descricaoProduto" />

                    <label htmlFor="precoUnitario" className="form-label">Preço Unitário</label>
                    <input type="number" step="0.01" className="form-control" placeholder="Digite o preço unitário" name="precoUnitario" id="precoUnitario" />
                    
                </div>
            </div>
        </div>
    </div>
  )
}