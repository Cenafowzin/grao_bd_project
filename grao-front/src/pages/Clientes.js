import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LojaContext } from "../Loja/LojaContext";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { selectedLojaId } = useContext(LojaContext);

  useEffect(() => {
    loadClientes();
  }, []);

  const loadClientes = async () => {
    const result = await axios.get(`http://localhost:8080/clientes/${selectedLojaId}`);
    const clientesFidelizados = result.data.filter(
      (cliente) => cliente.fidelizado
    );
    setClientes(clientesFidelizados);
  };

  const deleteCliente = async (id_cliente) => {
    if (window.confirm("Tem certeza que deseja deletar este cliente?")) {
      await axios.delete(`http://localhost:8080/cliente/${id_cliente}`);
      loadClientes();
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar clientes com base no termo de pesquisa
  const filteredClientes = clientes.filter((cliente) =>
    cliente.cpf.includes(searchTerm)
  );

  return (
    <div className="container">
      <div className="py-4">
        <h1>Clientes</h1>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Link className="btn btn-dark mx-2" to="/criarCliente" style={{ backgroundColor: '#B21D9B' }}>
            Novo Cliente
          </Link>
          <input
            type="text"
            className="form-control w-25"
            placeholder="Pesquisar por CPF"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">CPF</th>
              <th scope="col">Nome</th>
              <th scope="col">Telefone</th>
              <th scope="col">Pontos de Fidelidade</th>
              <th scope="col">Fidelizado</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>
          <tbody>
            {filteredClientes.map((cliente, index) => (
              <tr key={cliente.id_cliente}>
                <th scope="row">{cliente.id_cliente}</th>
                <td>{cliente.cpf}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.pontos_fidelidade}</td>
                <td>{cliente.fidelizado ? "Sim" : "Não"}</td>
                <td>
                  <Link
                    className="btn btn-secondary mx-2"
                    to={`/editarCliente/${cliente.id_cliente}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteCliente(cliente.id_cliente)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
