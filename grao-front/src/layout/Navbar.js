import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LojaContext } from '../Loja/LojaContext';

export default function Navbar({ isAuthenticated, handleLogout }) {
  const { selectedLojaId, selectedLojaBairro } = useContext(LojaContext);

  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#43B02A' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Grão</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="btn" to="/">
            <span className="fa-solid fa-arrow-left"></span>
          </Link>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="mx-2">Loja:</h3>
            {selectedLojaId !== null && selectedLojaBairro !== null ? (
              <div>
                <h3>{selectedLojaBairro}</h3>
              </div>
            ) : null}
          </div>
          <Link className="btn btn-outline-light" to="/produtos"> Produtos</Link>
          <Link className="btn btn-outline-light" to="/realizarVenda"> Venda</Link>
          <Link className="btn btn-outline-light" to="/clientes"> Clientes</Link>
          <Link className="btn btn-outline-light" to="/funcionarios"> Funcionarios</Link>
          {isAuthenticated ? (
            <button className="btn btn-outline-light" onClick={handleLogoutClick}>Sair</button>
          ) : (
            <Link className="btn btn-outline-light" to="/login"> Entrar</Link>
          )}
        </div>
      </nav>
    </div>
  );
}
