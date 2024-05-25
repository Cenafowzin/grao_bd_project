import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LojaContext } from "../Loja/LojaContext";

export default function Lojas() {
  const [lojas, setLojas] = useState([]);
  const { saveLojaId } = useContext(LojaContext);
  let navigate = useNavigate();

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

  const viewLoja = (id_loja) => {
    console.log("ID da Loja:", id_loja); // Adicione este log para depuração
    navigate(`/verLoja/${id_loja}`);
  };

  return (
    <div className="container">
      <div className="py-4">
        <Link className="btn btn-primary mx-2 mb-4" to="/criarLoja">
          Nova Loja
        </Link>
        <div className="row">
          {lojas.map((loja, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Loja {index + 1}</h5>
                  <p className="card-text">
                    <strong>Rua:</strong> {loja.rua}
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="card-text">
                        <strong>Número:</strong> {loja.numero}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="card-text">
                        <strong>Cidade:</strong> {loja.cidade}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => saveLojaId(loja.id_loja)}
                  >
                    Selecionar
                  </button>
                  <button className="btn btn-primary mx-2" onClick={() => viewLoja(loja.id)}>
                    Ver
                  </button>
                  <Link className="btn btn-secondary mx-2" to={`/editarLoja/${loja.id_loja}`}>
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteLoja(loja.id_loja)}
                  >
                    Deletar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
