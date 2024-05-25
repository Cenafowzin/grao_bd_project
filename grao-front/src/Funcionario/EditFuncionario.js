import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditFuncionario() {
  let navigate = useNavigate();

  const { id_funcionario } = useParams();

  const [func, setFunc] = useState({
    id_gerente: "",
    cpf: "",
    nome: "",
    email: "",
    rua: "",
    cidade: "",
    bairro: "",
    numero: "",
    salario: "",
    cargo: "",
  });

  const {
    id_gerente,
    cpf,
    nome,
    email,
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
      [name]:
        name === "salario"
          ? parseFloat(value)
          : name === "numero"
          ? parseInt(value, 10)
          : value,
    });
  };

  useEffect(() => {
    loadFunc();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8080/funcionario/${id_funcionario}`,
      func
    );
    navigate("/funcionarios");
  };

  const loadFunc = async () => {
    const result = await axios.get(
      `http://localhost:8080/funcionario/${id_funcionario}`
    );
    setFunc(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-mc-6 offset-md3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar Funcionário</h2>
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
