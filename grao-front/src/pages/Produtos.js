import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { LojaContext } from "../Loja/LojaContext";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [search, setSearch] = useState("");
  const { selectedLojaId } = useContext(LojaContext);

  useEffect(() => {
    loadProdutos();
  }, []);

  const loadProdutos = async () => {
    const result = await axios.get(`http://localhost:8080/produtos/${selectedLojaId}`);
    setProdutos(result.data);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const deleteProduto = async (codigo_barras) => {
    if (window.confirm("Tem certeza que deseja deletar este produto?")) {
      await axios.delete(`http://localhost:8080/produto/${codigo_barras}`);
      loadProdutos();
    }
  };

  const filteredProdutos = produtos.filter((produto) =>
    produto.codigo_barras.includes(search)
  );

  return (
    <div className="container">
      <div className="py-4">
        <h1>Produtos</h1>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Link className="btn btn-dark mx-2" style={{ backgroundColor: '#B21D9B' }} to="/criarProduto">
            Novo Produto
          </Link>
          <input
            type="text"
            className="form-control w-25"
            placeholder="Pesquisar por Código de Barras"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Código de Barras</th>
              <th scope="col">Descrição</th>
              <th scope="col">Preço Unitário</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredProdutos.map((produto, index) => (
              <tr key={produto.codigo_barras}>
                <th scope="row">{produto.codigo_barras}</th>
                <td>{produto.descricao}</td>
                <td>{produto.valor_unitario}</td>
                <td>
                  <Link
                    className="btn btn-secondary mx-2"
                    to={`/editarProduto/${produto.codigo_barras}`}
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteProduto(produto.codigo_barras)}
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
