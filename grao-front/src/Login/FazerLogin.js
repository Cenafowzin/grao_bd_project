import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FazerLogin() {
    const [credenciais, setCredenciais] = useState({ email: '', senha: '' });
    const navigate = useNavigate();
    const [error, setError] = useState('');  // Adiciona estado para erro

    const handleInputChange = (e) => {
        setCredenciais({ ...credenciais, [e.target.name]: e.target.value });
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/login', credenciais);
            const nome = response.data;
            localStorage.setItem('nome', nome);
            navigate('/lojas');
        } catch (error) {
            console.error('Erro no login:', error.response ? error.response.data : error.message);
            alert('Falha no login: ' + (error.response ? error.response.data : error.message));
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
            <form onSubmit={handleLogin} style={{ width: '300px' }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        name="email"
                        value={credenciais.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="senha"
                        value={credenciais.senha}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default FazerLogin;
