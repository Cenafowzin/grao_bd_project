import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Loja() {
  const [lojas, setLojas] = useState([]);

  useEffect(() => {
    loadLojas();
  }, []);

  const loadLojas = async () => {
    const result = await axios.get("http://localhost:8080/lojas");
    setLojas(result.data);
  };

  const deleteLoja = async (id_loja) => {
    if (window.confirm("Tem certeza que deseja deletar esta loja?")) {
      await axios.delete(`http://localhost:8080/loja/${id_loja}`);
      loadLojas();
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <Link className="btn btn-primary mx-2" to="/criarLoja">
          Nova Loja
        </Link>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id Loja</th>
              <th scope="col">Rua</th>
              <th scope="col">Cidade</th>
              <th scope="col">Numero</th>
              <th scope="col">Opçoes</th>
            </tr>
          </thead>
          <tbody>
            {lojas.map((loja, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{loja.rua}</td>
                <td>{loja.cidade}</td>
                <td>{loja.numero}</td>
                <td>
                  <button className="btn btn-primary mx-2">Ver</button>
                  <Link
                    className="btn btn-secondary mx-2"
                    to={`/editarLoja/${loja.id_loja}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteLoja(loja.id_loja)}
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
