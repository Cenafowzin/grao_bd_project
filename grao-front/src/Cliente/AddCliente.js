import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddCliente() {
  let navigate = useNavigate();

  const [cliente, setCliente] = useState({
    cpf: "",
    nome: "",
    telefone: "",
    pontos_fidelidade: 0,
    fidelizado: false,
  });

  const { cpf, nome, telefone, pontos_fidelidade, fidelizado } = cliente;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCliente({
      ...cliente,
      [name]: name === "pontos_fidelidade" ? parseInt(value, 10) : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!fidelizado) {
      const confirm = window.confirm("O cliente não será salvo, pois não está fidelizado. Deseja continuar?");
      if (confirm) {
        navigate("/clientes");
        return;
      }
    } else {
      await axios.post("http://localhost:8080/cliente", cliente);
      navigate("/clientes");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Adicionar Cliente</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="cpf" className="form-label">
                CPF
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o CPF"
                name="cpf"
                value={cpf}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o nome"
                name="nome"
                value={nome}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefone" className="form-label">
                Telefone
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Digite o telefone"
                name="telefone"
                value={telefone}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pontos_fidelidade" className="form-label">
                Pontos de Fidelidade
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Digite os pontos de fidelidade"
                name="pontos_fidelidade"
                value={pontos_fidelidade}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="fidelizado" className="form-label">
                Fidelizado
              </label>
              <select
                className="form-select"
                name="fidelizado"
                value={fidelizado}
                onChange={onInputChange}
              >
                <option value={false}>Não</option>
                <option value={true}>Sim</option>
              </select>
            </div>
            <Link className="btn btn-danger mx-2" to="/clientes">
              Cancelar
            </Link>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
