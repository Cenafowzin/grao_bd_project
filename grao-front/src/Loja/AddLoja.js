import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddLoja() {
  let navigate = useNavigate();

  const [loja, setLoja] = useState({
    rua: "",
    cidade: "",
    bairro: "",
    numero: "",
    telefone: "",
  });

  const { rua, cidade, bairro, numero, telefone } = loja;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setLoja({
      ...loja,
      [name]: name === "numero" ? parseInt(value, 10) : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/loja", loja);
    navigate("/lojas");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-mc-6 offset-md3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Adicionar Loja</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="Rua" className="form-label">
                Rua
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite a rua"
                name="rua"
                value={rua}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Cidade" className="form-label">
                Cidade
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite a cidade"
                name="cidade"
                value={cidade}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Bairro" className="form-label">
                Bairro
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite o bairro"
                name="bairro"
                value={bairro}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Numero" className="form-label">
                Numero
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Digite o numero"
                name="numero"
                value={numero}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Telefon" className="form-label">
                Telefone
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite o telefone"
                name="telefone"
                value={telefone}
                onChange={onInputChange}
              />
            </div>
            <Link className="btn btn-danger mx-2" to="/lojas">
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
