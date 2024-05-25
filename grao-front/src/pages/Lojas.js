import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LojaContext } from "../Loja/LojaContext";

export default function Lojas() {
  const [lojas, setLojas] = useState([]);
  const { saveLojaId, saveLojaBairro } = useContext(LojaContext);

  useEffect(() => {
    loadLojas();
    saveLojaId(0);
    saveLojaBairro(null);
  }, []);

  const handleSelectLoja = (id, bairro) => {
    saveLojaId(id);
    saveLojaBairro(bairro);
  };

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
        <Link className="btn btn-primary mx-2 mb-4" to="/criarLoja">
          Nova Loja
        </Link>
        <div className="row">
          {lojas.map((loja, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{loja.bairro}</h5>
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
                <Link
                    className="btn btn-primary mx-2"
                    onClick={() => handleSelectLoja(loja.id_loja, loja.bairro)}
                    to="/produtos"
                  >
                    Selecionar
                  </Link>
                  <button className="btn btn-primary mx-2">Ver</button>
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
