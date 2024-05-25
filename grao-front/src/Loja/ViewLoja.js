import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewLoja() {
  const { id_loja } = useParams(); // Obtém o ID dos parâmetros da URL
  const [loja, setLoja] = useState({
    rua: "",
    cidade: "",
    bairro: "",
    numero: "",
    telefone: "",
  });

  useEffect(() => {
    loadLoja();
  }, []);

  const loadLoja = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/loja/${id_loja}`);
      console.log('Loja carregada:', result.data); // Log para verificar os dados
      setLoja(result.data);
    } catch (error) {
      console.error("Erro ao carregar loja:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Detalhes da Loja</h2>
          <div className="card">
            <div className="card-header">
              <b>Informações da Loja:</b>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Rua:</b> {loja.rua}</li>
              <li className="list-group-item"><b>Cidade:</b> {loja.cidade}</li>
              <li className="list-group-item"><b>Bairro:</b> {loja.bairro}</li>
              <li className="list-group-item"><b>Numero:</b> {loja.numero}</li>
              <li className="list-group-item"><b>Telefone:</b> {loja.telefone}</li>
            </ul>
          </div>
          <Link className="btn btn-primary my-2" to="/lojas">Voltar</Link>
        </div>
      </div>
    </div>
  );
}
