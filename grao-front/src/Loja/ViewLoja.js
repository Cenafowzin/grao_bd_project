import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewLoja() {
    const { id_loja } = useParams();
    console.log("ID da loja:", id_loja); // Adicione este log para verificar o ID recebido

    const [loja, setLoja] = useState(null);
  
    useEffect(() => {
      if (id_loja) {
        loadLoja(id_loja);
      } else {
        console.error("ID da loja não fornecido");
      }
    }, [id_loja]);

    const loadLoja = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/loja/${id_loja}`);
            console.log('Dados da loja carregados:', result.data); // Verifique os dados recebidos
            setLoja(result.data);
          } catch (error) {
            console.error('Erro ao carregar loja:', error);
          }
    };

    if (!loja) {
        return <div>Carregando...</div>;
    }


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
