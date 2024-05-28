import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LojaContext } from "../Loja/LojaContext";

export default function AddProduto() {
  let navigate = useNavigate();
  const { selectedLojaId } = useContext(LojaContext);

  const [produto, setProduto] = useState({
    codigo_barras: "",
    descricao: "",
    valor_unitario: ""
  });

  const [produto_loja] = useState({
    id_loja: selectedLojaId,
    codigo_produto:""
  });

  const { codigo_barras, descricao, valor_unitario } = produto;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    // Verificar se o valor é um número positivo antes de atualizar o estado
    if (name === "valor_unitario" && (isNaN(value) || parseFloat(value) < 0)) {
      // Se o valor não for um número positivo, não atualizamos o estado
      return;
    }
    // Atualizar o estado normalmente
    setProduto({
      ...produto,
      [name]: name === "valor_unitario" ? parseFloat(value) : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/produto", produto);
    if (selectedLojaId != 0) {
      const result = await axios.get(`http://localhost:8080/produto/${produto.codigo_barras}`);
      produto_loja.codigo_produto = result.data.codigo_barras;
      await axios.post("http://localhost:8080/produto_loja", produto_loja);
    }
    navigate("/produtos");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Adicionar Produto</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="codigo_barras" className="form-label">
                Código de Barras
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite o código de barras"
                name="codigo_barras"
                value={codigo_barras}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">
                Descrição do Produto
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite a descrição do produto"
                name="descricao"
                value={descricao}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor_unitario" className="form-label">
                Preço Unitário
              </label>
              <input
                type="number"
                step="0.01"
                className="form-control"
                placeholder="Digite o preço unitário"
                name="valor_unitario"
                value={valor_unitario}
                onChange={onInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-dark" style={{ backgroundColor: '#B21D9B' }}>
              Enviar
            </button>
            <Link className="btn btn-danger mx-2" to="/produtos">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
