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
          <div className="list-group list-group-flush">
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-6 text-md-right"><b>Rua:</b></div>
                <div className="col-md-6">{loja.rua}</div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-6 text-md-right"><b>Cidade:</b></div>
                <div className="col-md-6">{loja.cidade}</div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-6 text-md-right"><b>Bairro:</b></div>
                <div className="col-md-6">{loja.bairro}</div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-6 text-md-right"><b>Número:</b></div>
                <div className="col-md-6">{loja.numero}</div>
              </div>
            </div>
            <div className="list-group-item">
              <div className="row">
                <div className="col-md-6 text-md-right"><b>Telefone:</b></div>
                <div className="col-md-6">{loja.telefone}</div>
              </div>
            </div>
          </div>
        </div>
        <Link className="btn btn-dark my-2" style={{ backgroundColor: '#B21D9B' }} to="/lojas">Voltar</Link>
      </div>
    </div>
  </div>
  );
}
