import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Funcionarios() {
  const [funcs, setFuncs] = useState([]);

  useEffect(() => {
    loadFuncs();
  }, []);

  const loadFuncs = async () => {
    const result = await axios.get("http://localhost:8080/funcionarios");
    setFuncs(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Cargo</th>
              <th scope="col">E-mail</th>
            </tr>
          </thead>
          <tbody>
            {
                funcs.map((func, index)=>(
                    <tr key={func.id_funcionario}>
                    <th scope="row">{func.id_funcionario}</th>
                    <td>{func.nome}</td>
                    <td>{func.cargo}</td>
                    <td>{func.email}</td>
                    </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
