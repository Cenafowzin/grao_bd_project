import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LojaContext } from "../Loja/LojaContext";

export default function AddFuncionario() {
  let navigate = useNavigate();
  const { selectedLojaId } = useContext(LojaContext);

  const [func, setFunc] = useState({
    id_gerente: "",
    cpf: "",
    nome: "",
    email: "",
    senha: "",
    rua: "",
    cidade: "",
    bairro: "",
    numero: "",
    salario: "",
    cargo: "",
  });

  const [func_loja] = useState({
    id_funcionario: "",
    id_loja: selectedLojaId,
  });

  const [telefones, setTelefones] = useState([{ numero: "" }]);

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
      [name]:
        name === "salario"
          ? parseFloat(value)
          : name === "numero"
          ? parseInt(value, 10)
          : value,
    });
  };

  const handleTelefoneChange = (index, e) => {
    const { name, value } = e.target;
    const newTelefones = [...telefones];
    newTelefones[index][name] = value;
    setTelefones(newTelefones);
  };

  const addTelefone = () => {
    setTelefones([...telefones, { numero: "" }]);
  };

  const removeTelefone = (index) => {
    const newTelefones = telefones.filter((_, i) => i !== index);
    setTelefones(newTelefones);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/funcionario", func);
    const result = await axios.get(
      `http://localhost:8080/funcionarioCpf/${func.cpf}`
    );
    const id_funcionario = result.data.id_funcionario;

    for (const telefone of telefones) {
      await axios.post("http://localhost:8080/telefone", {
        id_funcionario,
        numero: telefone.numero,
      });
    }

    if (selectedLojaId != 0) {
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
                required
                pattern="\d{11}"
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Telefones" className="form-label">
                Telefones
              </label>
              {telefones.map((telefone, index) => (
                <div key={index} className="d-flex mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite o telefone"
                    name="numero"
                    value={telefone.numero}
                    onChange={(e) => handleTelefoneChange(index, e)}
                    required
                    pattern="\d{10,11}"
                  />
                  <button
                    type="button"
                    className="btn btn-danger ms-2"
                    onClick={() => removeTelefone(index)}
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-dark" style={{ backgroundColor: '#B21D9B' }}
                onClick={addTelefone}
              >
                Adicionar Telefone
              </button>
            </div>
            <button type="submit" className="btn btn-dark" style={{ backgroundColor: '#B21D9B' }}>
              Enviar
            </button>
            <Link className="btn btn-danger mx-2" to="/funcionarios">
              Cancelar
            </Link>
            
          </form>
        </div>
      </div>
    </div>
  );
}
