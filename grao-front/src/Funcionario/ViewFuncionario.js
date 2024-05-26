import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function ViewFuncionario() {
    const { id_funcionario } = useParams();  // Captura o ID do URL
    const [funcionario, setFuncionario] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFuncionario = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://localhost:8080/funcionario/${id_funcionario}`);
                setFuncionario(response.data);
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };

        fetchFuncionario();
    }, [id_funcionario]);

    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar os dados: {error.message}</p>;
    if (!funcionario) return <p>Nenhum funcionário encontrado</p>;

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1>Detalhes do Funcionário</h1>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{funcionario.nome}</h5>
                            <p className="card-text"><strong>CPF:</strong> {funcionario.cpf}</p>
                            <p className="card-text"><strong>Email:</strong> {funcionario.email}</p>
                            <p className="card-text"><strong>Cargo:</strong> {funcionario.cargo}</p>
                            <p className="card-text"><strong>Salário:</strong> R$ {funcionario.salario}</p>
                            <p className="card-text"><strong>Rua:</strong> {funcionario.rua}</p>
                            <p className="card-text"><strong>Cidade:</strong> {funcionario.cidade}</p>
                            <p className="card-text"><strong>Bairro:</strong> {funcionario.bairro}</p>
                            <p className="card-text"><strong>Número:</strong> {funcionario.numero}</p>
                        </div>
                    </div>
                    <Link to="/funcionarios" className="btn btn-primary mt-3">Voltar</Link>
                </div>
            </div>
        </div>
    );
}
