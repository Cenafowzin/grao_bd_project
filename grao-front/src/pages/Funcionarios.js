import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Funcionarios() {
  const [funcs, setFuncs] = useState([]);

  const { id_funcionario } = useParams();

  useEffect(() => {
    loadFuncs();
  }, []);

  const loadFuncs = async () => {
    const result = await axios.get("http://localhost:8080/funcionarios");
    setFuncs(result.data);
  };

  const deleteFunc = async (id_funcionario) => {
    await axios.delete(`http://localhost:8080/funcionario/${id_funcionario}`);
    loadFuncs();
  };

  return (
    <div className="container">
      <div className="py-4">
        <Link className="btn btn-primary mx-2" to="/criarFuncionario">
          Novo Funcionário
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Cargo</th>
              <th scope="col">E-mail</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {funcs.map((func, index) => (
              <tr key={func.id_funcionario}>
                <th scope="row">{func.id_funcionario}</th>
                <td>{func.nome}</td>
                <td>{func.cargo}</td>
                <td>{func.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to="/detalhesFuncionario"
                  >
                    Ver
                  </Link>
                  <Link
                    className="btn btn-secondary mx-2"
                    to={`/editarFuncionario/${func.id_funcionario}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteFunc(func.id_funcionario)}
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
