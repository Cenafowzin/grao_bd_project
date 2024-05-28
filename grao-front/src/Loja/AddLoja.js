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
    if ((name === "numero" && value.length <= 10) || (name === "telefone" && value.length <= 11) || (name !== "numero" && name !== "telefone")) {
      setLoja({
        ...loja,
        [name]: value,
      });
    }
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
                required
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
                required
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
                required
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
                required               
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Telefone" className="form-label">
                Telefone
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Digite o telefone"
                name="telefone"
                value={telefone}
                onChange={onInputChange}
                required
                pattern="\d{10,11}"
              />
            </div>

            <button type="submit" className="btn btn-dark" style={{ backgroundColor: '#B21D9B' }}>
              Enviar
            </button>
            <Link className="btn btn-danger mx-2" to="/lojas">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
