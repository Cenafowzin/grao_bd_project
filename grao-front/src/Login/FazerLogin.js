import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import grao_logo2 from '../Images/grao_logo2.png'; // Importe sua logo aqui

function FazerLogin({ handleLogin }) {
    const [credenciais, setCredenciais] = useState({ email: '', senha: '' });
    const navigate = useNavigate();
    const [error, setError] = useState('');
  
    const handleInputChange = (e) => {
      setCredenciais({ ...credenciais, [e.target.name]: e.target.value });
    };
  
    const handleLoginSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post('http://localhost:8080/api/login', credenciais);
        const token = response.data.token;
        handleLogin(token);
        navigate('/');
      } catch (error) {
        console.error('Erro no login:', error.response ? error.response.data : error.message);
        alert('Falha no login: ' + (error.response ? error.response.data : error.message));
      }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#43B02A' }}>
            <form onSubmit={handleLoginSubmit} style={{ width: '300px', textAlign: 'center', backgroundColor: '#FFF', padding: '20px', borderRadius: '10px' }}>
                <img src={grao_logo2} alt="grao_logo2" style={{ width: '100px', marginBottom: '20px' }} />
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
                <button type="submit" className="btn btn-dark" style={{ backgroundColor: '#B21D9B' }}>Login</button>
            </form>
        </div>
    );
}

export default FazerLogin;
