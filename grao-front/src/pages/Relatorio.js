import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Relatorio() {
  const [faturamentosLoja, setFaturamentos] = useState([]);
  const [faturamentoTotal, setFaturamento] = useState("");
  const [faturamentoProdutos, setFaturamentosProdutos] = useState([]);

  useEffect(() => {
    loadFaturamentoTotal();
    loadFaturamentoLojas();
    loadFaturamentoProdutos();
  }, []);

  const loadFaturamentoLojas = async () => {
    const result = await axios.get("http://localhost:8080/faturamentoLojas");
    setFaturamentos(result.data);
  };

  const loadFaturamentoTotal = async () => {
    const result = await axios.get("http://localhost:8080/vendaSum");
    setFaturamento(result.data);
  };

  const loadFaturamentoProdutos = async () => {
    const result = await axios.get("http://localhost:8080/valoresProdutos");
    setFaturamentosProdutos(result.data);
  };

  return (
    <div className="container mt-5">
      <div className="py-4">
        <h1 className="text-center mb-4">Relatório de Faturamento</h1>
        <h3 className="text-center mb-4">Faturamento Total: R${faturamentoTotal}</h3>
        <div className="mb-5">
          <h4 className="mb-3">Faturamento por Loja</h4>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Loja</th>
                <th scope="col">Faturamento Total</th>
              </tr>
            </thead>
            <tbody>
              {faturamentosLoja.map((faturamento, index) => (
                <tr key={faturamento.bairro}>
                  <th scope="row">{faturamento.bairro}</th>
                  <td>R${faturamento.faturamento_total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h4 className="mb-3">Faturamento por Produto</h4>
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Código de Barras</th>
                <th scope="col">Produto</th>
                <th scope="col">Faturamento Total</th>
              </tr>
            </thead>
            <tbody>
              {faturamentoProdutos.map((faturamento, index) => (
                <tr key={faturamento.codigo_produto}>
                  <th scope="row">{faturamento.codigo_produto}</th>
                  <td>{faturamento.produto}</td>
                  <td>R${faturamento.total_valores_pedidos.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
