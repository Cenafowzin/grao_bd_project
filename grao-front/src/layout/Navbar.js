import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LojaContext } from '../Loja/LojaContext'

export default function Navbar() {
    const { selectedLojaId, selectedLojaBairro } = useContext(LojaContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#43B02A' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Grão</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="btn" to ="/lojas">
                        <span className="fa-solid fa-arrow-left"></span>
                    </Link>
                    {selectedLojaId !== 0 && selectedLojaId !== null && selectedLojaBairro !== null ? (
                        <div>
                            <h2>{selectedLojaBairro}</h2>
                        </div>
                    ) : null}
                    <Link className="btn btn-outline-light" to ="/produtos"> Produtos</Link>
                    <Link className="btn btn-outline-light" to ="/clientes"> Clientes</Link>
                    <Link className="btn btn-outline-light" to ="/funcionarios"> Funcionarios</Link>
                    <Link className="btn btn-outline-light" to ="/login"> Login</Link>
                </div>
            </nav>
        </div>
    )
}
