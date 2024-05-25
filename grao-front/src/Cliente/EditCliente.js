import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCliente() {
  let navigate = useNavigate();
  const { id_cliente } = useParams();

  const [cliente, setCliente] = useState({
    cpf: "",
    nome: "",
    telefone: "",
    pontos_fidelidade: 0,
    fidelizado: false,
  });

  const { cpf, nome, telefone, pontos_fidelidade, fidelizado } = cliente;

  const onInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCliente({
      ...cliente,
      [name]: type === "checkbox" ? checked : value,
    });

    if ((name === "cpf" && value.length <= 11) || (name === "telefone" && value.length <= 11) || (name !== "cpf" && name !== "telefone")) {
      setCliente({
        ...cliente,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    loadCliente();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!fidelizado) {
      const confirm = window.confirm("O cliente não será fidelizado e será apagado. Deseja continuar?");
      if (confirm) {
        await axios.delete(`http://localhost:8080/cliente/${id_cliente}`);
        navigate("/clientes");
        return;
      } else {
        return; // Não faça nada se o usuário cancelar
      }
    } else {
      await axios.put(`http://localhost:8080/cliente/${id_cliente}`, cliente);
      navigate("/clientes");
    }
  };

  const loadCliente = async () => {
    const result = await axios.get(`http://localhost:8080/cliente/${id_cliente}`);
    setCliente(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar Cliente</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="Cpf" className="form-label">
                CPF
              </label>
              <input
                type={"text"}
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
              <label htmlFor="Nome" className="form-label">
                Nome
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Digite o nome"
                name="nome"
                value={nome}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Telefone" className="form-label">
                Telefone
              </label>
              <input
                type={"text"}
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
              <label htmlFor="PontosFidelidade" className="form-label">
                Pontos de Fidelidade
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Digite os pontos de fidelidade"
                name="pontos_fidelidade"
                value={pontos_fidelidade}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Fidelizado" className="form-label">
                Fidelizado
              </label>
              <input
                type={"checkbox"}
                className="form-check-input"
                name="fidelizado"
                checked={fidelizado}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Salvar
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
