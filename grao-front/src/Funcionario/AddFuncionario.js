import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LojaContext } from "../Loja/LojaContext";

export default function AddFuncionario() {
    let navigate = useNavigate();
    const { selectedLojaId } = useContext(LojaContext);

  const [func, setFunc] = useState({
    id_gerente:"",
    cpf: "",
    nome: "",
    email: "",
    senha:"",
    rua: "",
    cidade: "",
    bairro: "",
    numero: "",
    salario: "",
    cargo: ""
  });

  const [func_loja] =useState({
    id_funcionario: "",
    id_loja: selectedLojaId
  });

  const {
    id_gerente,
    cpf,
    nome,
    email,
    senha,
    rua,
    cidade,
    bairro,
    numero,
    salario,
    cargo,
  } = func;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFunc({
      ...func,
      [name]: name === "salario" ? parseFloat(value) : (name === "numero" ? parseInt(value,10) : value)
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/funcionario", func);
    if (selectedLojaId != 0) {
      const result = await axios.get(`http://localhost:8080/funcionarioCpf/${func.cpf}`);
      func_loja.id_funcionario = result.data.id_funcionario;
      await axios.post("http://localhost:8080/funcionario_loja", func_loja);
    }
    navigate("/funcionarios");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-mc-6 offset-md3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Adicionar Funcionário</h2>
          <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="Cpf" className="form-label">
              Cpf
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Digite o cpf"
              name="cpf"
              value={cpf}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Digite o nome"
              name="nome"
              value={nome}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="E-mail" className="form-label">
              E-mail
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Digite o e-mail"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Senha" className="form-label">
              Senha
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Digite a senha"
              name="senha"
              value={senha}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Rua" className="form-label">
              Rua
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Digite a rua"
              name="rua"
              value={rua}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Cidade" className="form-label">
              Cidade
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Digite a cidade"
              name="cidade"
              value={cidade}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Bairro" className="form-label">
              Bairro
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Digite o bairro"
              name="bairro"
              value={bairro}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Numero" className="form-label">
              Numero
            </label>
            <input
              type={"number"}
              className="form-control"
              placeholder="Digite o numero"
              name="numero"
              value={numero}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Salario" className="form-label">
              Salário
            </label>
            <input
              type={"number"}
              className="form-control"
              placeholder="Digite o salário"
              name="salario"
              value={salario}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Cargo" className="form-label">
              Cargo
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Digite o cargo"
              name="cargo"
              value={cargo}
              onChange={onInputChange}
            />
          </div>
          <Link className="btn btn-danger mx-2" to="/funcionarios">
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </form>
        </div>
      </div>
    </div>
  );
}
