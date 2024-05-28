import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LojaContext } from '../Loja/LojaContext';
import grao_logo from '../Images/grao_logo.png'

export default function Navbar({ isAuthenticated, handleLogout }) {
  const { selectedLojaId, selectedLojaBairro } = useContext(LojaContext);

  const handleLogoutClick = () => {
    handleLogout();
  };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#43B02A' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ color: '#FFF' }}>
                    <img src={grao_logo} alt="Grão" style={{ height: '40px' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: '#FFF' }} to="/lojas">Relatório</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: '#FFF' }} to="/lojas">Lojas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: '#FFF' }} to="/produtos">Produtos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: '#FFF' }} to="/realizarVenda">Venda</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: '#FFF' }} to="/clientes">Clientes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: '#FFF' }} to="/funcionarios">Funcionarios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: '#FFF' }} to="/backups">Backups</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                    {isAuthenticated ? (
                        <button className="btn btn-outline-light" onClick={handleLogoutClick}>Sair</button>
                    ) : (
                        <Link className="btn btn-outline-light" to="/login"> Entrar</Link>
                    )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
