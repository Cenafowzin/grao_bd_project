import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProduto() {
  let navigate = useNavigate();
  const { codigo_barras } = useParams();

  const [produto, setProduto] = useState({
    codigo_barras: "",
    descricao: "",
    valor_unitario: "",
  });

  const { descricao, valor_unitario } = produto;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setProduto({
      ...produto,
      [name]: value,
    });
  };

  useEffect(() => {
    loadProduto();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/produto/${codigo_barras}`, produto);
    navigate("/produtos");
  };

  const loadProduto = async () => {
    const result = await axios.get(
      `http://localhost:8080/produto/${codigo_barras}`
    );
    setProduto(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-mc-6 offset-md3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar Produto</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">
                Descrição
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite a descrição"
                name="descricao"
                value={descricao}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="valor_unitario" className="form-label">
                Valor Unitário
              </label>
              <input
                type={"number"}
                step="0.01"
                className="form-control"
                placeholder="Digite o valor unitário"
                name="valor_unitario"
                value={valor_unitario}
                onChange={onInputChange}
              />
            </div>
            <Link className="btn btn-danger mx-2" to="/produtos">
              Cancel
            </Link>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
