import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LojaContext } from "../Loja/LojaContext";

export default function AddVenda() {
  let navigate = useNavigate();
  const vendedor = localStorage.getItem("idFuncionario");
  const [idCliente, setIdCliente] = useState(null);
  const [cliente, setCliente] = useState(null);
  const [produtos, setProdutos] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedProdutos, setSelectedProdutos] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [pedido, setPedido] = useState({ valor_total: 0 });
  const [erroAoBuscarCliente, setErroAoBuscarCliente] = useState(false);
  const { selectedLojaId } = useContext(LojaContext);

  useEffect(() => {
    loadProdutos();
    loadBaseCliente();
  }, []);

  useEffect(() => {
    updateValorTotal();
  }, [selectedProdutos]);

  const loadProdutos = async () => {
    const result = await axios.get(`http://localhost:8080/produtos/${selectedLojaId}`);
    setProdutos(result.data);
  };

  const loadBaseCliente = async () => {
    const result = await axios.get("http://localhost:8080/clienteNull");
    setIdCliente(result.data.id_cliente);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleQuantityChange = (e, codigo_barras) => {
    setQuantities({
      ...quantities,
      [codigo_barras]: e.target.value,
    });
  };

  const selectProduto = (produto) => {
    const quantidade = parseInt(quantities[produto.codigo_barras]) || 1;
    const produtoExistente = selectedProdutos.find(
      (p) => p.codigo_barras === produto.codigo_barras
    );

    if (produtoExistente) {
      setSelectedProdutos(
        selectedProdutos.map((p) =>
          p.codigo_barras === produto.codigo_barras
            ? { ...p, quantidade: p.quantidade + quantidade }
            : p
        )
      );
    } else {
      setSelectedProdutos([...selectedProdutos, { ...produto, quantidade }]);
    }
  };

  const handleRemoveProduto = (e, index) => {
    e.preventDefault();
    setSelectedProdutos(selectedProdutos.filter((_, i) => i !== index));
  };

  const updateValorTotal = () => {
    const total = selectedProdutos.reduce(
      (acc, produto) => acc + produto.valor_unitario * produto.quantidade,
      0
    );
    setPedido({ ...pedido, valor_total: total });
  };

  const filteredProdutos = produtos.filter((produto) =>
    produto.codigo_barras.includes(search)
  );

  const [cpf, setCpf] = useState("");

  const handleCpfChange = (e) => {
    e.preventDefault();
    setCpf(e.target.value);
  };

  const findCliente = async (e, cpfCliente) => {
    e.preventDefault();
    try {
      const result = await axios.get(
        `http://localhost:8080/clienteCpf/${cpfCliente}`
      );
      if (result.data) {
        setIdCliente(result.data.id_cliente);
        setCliente(result.data);
        setErroAoBuscarCliente(false);
      }
    } catch (error) {
      console.error("Erro ao buscar cliente:", error);
      setErroAoBuscarCliente(true);
      setCliente(null);
    }
  };

  const sendSell = async (e, pedido) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/pedido", pedido);
    const result = await axios.get("http://localhost:8080/lastPedido");
    const idPedido = result.data.id_pedido;

    for (const produto of selectedProdutos) {
      await axios.post("http://localhost:8080/pedido_produto", {
        codigo_produto: produto.codigo_barras,
        id_pedido: idPedido,
        quantidade: produto.quantidade,
      });
    }

    const valorTotalInteiro = parseInt(pedido.valor_total);

    await axios.post("http://localhost:8080/venda", {
      id_funcionario: vendedor,
      id_pedido: idPedido,
      id_cliente: idCliente,
      pontos: valorTotalInteiro,
    });

    navigate("/produtos");
  };

  return (
    <div className="container">
      <h2 className="text-center m-4">Venda</h2>
      {erroAoBuscarCliente && (
        <div className="alert alert-danger" role="alert">
          Cliente não encontrado. Por favor, verifique o CPF.
        </div>
      )}
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <form>
            <div className="mb-3">
              <label htmlFor="cpf" className="form-label">
                Cpf do Cliente
              </label>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <input
                  type="text"
                  className="form-control mx-2"
                  placeholder="Digite o CPF do cliente"
                  name="cpf"
                  value={cpf}
                  onChange={handleCpfChange}
                />
                <button
                  className="btn btn-dark mx-2" style={{ backgroundColor: '#B21D9B' }}
                  onClick={(e) => findCliente(e, cpf)}
                >
                  Buscar
                </button>
              </div>
              {cliente && (
                <div className="cliente-info">
                  <h5>Dados do Cliente</h5>
                  <p>CPF: {cliente.cpf}</p>
                  <p>Nome: {cliente.nome}</p>
                  <p>Telefone: {cliente.telefone}</p>
                  <p>Pontos: {cliente.pontos_fidelidade}</p>
                </div>
              )}
              <Link className="btn btn-dark mx-2" style={{ backgroundColor: '#B21D9B' }} to="/criarCliente">
                  Cadastrar cliente
                </Link>
              <h3>Produtos Selecionados</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Produto</th>
                    <th scope="col">Valor Unitario</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedProdutos.map((produto, index) => (
                    <tr key={index}>
                      <td>{produto.descricao}</td>
                      <td>{produto.valor_unitario}</td>
                      <td>{produto.quantidade}</td>
                      <td>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={(e) => handleRemoveProduto(e, index)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h4 className="text-center mt-3">
                Total: R$ {pedido.valor_total.toFixed(2)}
              </h4>
            </div>
            <button
              type="submit"
              className="btn btn-dark" style={{ backgroundColor: '#B21D9B' }}
              onClick={(e) => sendSell(e, pedido)}
            >
              Enviar
            </button>
            <Link className="btn btn-danger mx-2" to="/lojas">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
      <div className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <input
            type="text"
            className="form-control w-25"
            placeholder="Pesquisar por Código de Barras"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
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
              {filteredProdutos.map((produto) => (
                <tr key={produto.codigo_barras}>
                  <th scope="row">{produto.codigo_barras}</th>
                  <td>{produto.descricao}</td>
                  <td>{produto.valor_unitario}</td>
                  <td className="d-flex justify-content-center align-items-center">
                    <input
                      type="number"
                      className="form-control w-50"
                      placeholder="Quantidade"
                      value={quantities[produto.codigo_barras] || ""}
                      onChange={(e) =>
                        handleQuantityChange(e, produto.codigo_barras)
                      }
                    />
                    <button
                      className="btn btn-dark mx-2" style={{ backgroundColor: '#B21D9B' }}
                      onClick={() => selectProduto(produto)}
                    >
                      Adicionar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
