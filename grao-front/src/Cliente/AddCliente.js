import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LojaContext } from "../Loja/LojaContext";

export default function AddCliente() {
  let navigate = useNavigate();
  const { selectedLojaId } = useContext(LojaContext);

  const [cliente, setCliente] = useState({
    cpf: "",
    nome: "",
    telefone: "",
    pontos_fidelidade: 0,
    fidelizado: true,
  });

  const [cliente_loja] = useState({
    id_cliente: "",
    id_loja: selectedLojaId,
  });

  const { cpf, nome, telefone, pontos_fidelidade, fidelizado } = cliente;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCliente({
      ...cliente,
      [name]: name === "pontos_fidelidade" ? parseInt(value, 10) : value,
    });

    if ((name === "cpf" && value.length <= 11) || (name === "telefone" && value.length <= 11) || (name !== "cpf" && name !== "telefone")) {
      setCliente({
        ...cliente,
        [name]: value,
      });
    }

  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/cliente", cliente);
      if (selectedLojaId != 0) {
        const result = await axios.get(`http://localhost:8080/clienteCpf/${cliente.cpf}`);
        cliente_loja.id_cliente = result.data.id_cliente;
        await axios.post("http://localhost:8080/cliente_loja", cliente_loja)
      }
      navigate("/clientes");
    } catch (error) {
      console.error('Erro ao criar o cliente:', error.response ? error.response.data : error.message);
      // Aproveite para exibir um feedback ao usuário aqui, se apropriado
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
                required
                pattern="\d{11}"
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
                required
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
                required
                pattern="\d{10,11}"
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
                required
              />
            </div>
            <div className="mb-3">
            </div>
            <button type="submit" className="btn btn-dark" style={{ backgroundColor: '#B21D9B' }}>
              Enviar
            </button>
            <Link className="btn btn-danger mx-2" to="/clientes">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
