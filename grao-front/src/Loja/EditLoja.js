import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditLoja() {
  let navigate = useNavigate();

  const { id_loja } = useParams();

  const [loja, setLoja] = useState({
    rua: "",
    cidade: "",
    bairro: "",
    numero: "",
    telefone: "",
  });

  const { rua, cidade, bairro, numero, telefone } = loja;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if ((name === "numero" && value.length <= 10) || (name === "telefone" && value.length <= 11) || (name !== "numero" && name !== "telefone")) {
      setLoja({
        ...loja,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    loadLoja();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/loja/${id_loja}`, loja);
    navigate("/lojas");
  };

  const loadLoja = async () => {
    const result = await axios.get(`http://localhost:8080/loja/${id_loja}`);
    setLoja(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-mc-6 offset-md3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar Loja</h2>
          <form onSubmit={onSubmit}>
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
                pattern="\d{1,10}"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Telefone" className="form-label">
                Telefone
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Digite o telefone"
                name="telefone"
                value={telefone}
                onChange={onInputChange}
                required
                pattern="\d{1,11}"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Confirmar
            </button>
            <Link className="btn btn-danger mx-2" to="/lojas">
              Cancelar
            </Link>
            
          </form>
        </div>
      </div>
    </div>
  );
}
