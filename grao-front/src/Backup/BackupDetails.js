import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BackupDetails({ backupType }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setError(null);
            setLoading(true);
            setData([]);
            try {
                const response = await axios.get(`http://localhost:8080/${backupType}`);
                setData(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [backupType]);

    if (loading) return <p>Carregando dados...</p>;
    if (error) return <p>Erro ao carregar dados: {error}</p>;

    return (
        <div>
            <h2>Detalhes do Backup: {backupType.replace('bk_', '').replace('_', ' ').toUpperCase()}</h2>
            <table className="table">
                <thead>{renderTableHeaders(backupType)}</thead>
                <tbody>
                    {data.map((item, index) => renderTableRow(item, index, backupType))}
                </tbody>
            </table>
        </div>
    );
}

function renderTableHeaders(backupType) {
    switch (backupType) {
        case 'bk_funcionario':
            return (
                <tr>
                    <th>ID Funcionario</th>
                    <th>ID Gerente</th>
                    <th>CPF</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Rua</th>
                    <th>Cidade</th>
                    <th>Bairro</th>
                    <th>Número</th>
                    <th>Salário</th>
                    <th>Cargo</th>
                    <th>Data de Modificação</th>
                    <th>Operação</th>
                </tr>
            );
        case 'bk_pedido':
            return (
                <tr>
                    <th>ID Pedido</th>
                    <th>Data e Hora</th>
                    <th>Valor Total</th>
                    <th>Data de Modificação</th>
                    <th>Operação</th>
                </tr>
            );
        case 'bk_produto':
            return (
                <tr>
                    <th>Codigo de Barras</th>
                    <th>Descrição</th>
                    <th>Valor Unitario</th>
                    <th>Data de Modificação</th>
                    <th>Operação</th>
                </tr>
            );
        case 'bk_venda':
            return (
                <tr>
                    <th>ID Funcionário</th>
                    <th>ID Pedido</th>
                    <th>ID Cliente</th>
                    <th>Pontos</th>
                    <th>Data de Modificação</th>
                    <th>Operação</th>
                </tr>
            );

    }
}

function renderTableRow(item, index, backupType) {
    switch (backupType) {
        case 'bk_funcionario':
            return (
                <tr key={index}>
                    <td>{item.id_funcionario}</td>
                    <td>{item.id_gerente}</td>
                    <td>{item.cpf}</td>
                    <td>{item.nome}</td>
                    <td>{item.email}</td>
                    <td>{item.rua}</td>
                    <td>{item.cidade}</td>
                    <td>{item.bairro}</td>
                    <td>{item.numero}</td>
                    <td>{item.salario ? item.salario.toFixed(2) : 'N/A'}</td>
                    <td>{item.cargo}</td>
                    <td>{item.data_modificacao}</td>
                    <td>{item.operacao}</td>
                </tr>
            );
        case 'bk_pedido':
            return (
                <tr key={index}>
                    <td>{item.id_pedido}</td>
                    <td>{item.data_hora}</td>
                    <td>{item.valor_total != null ? item.valor_total.toFixed(2) : 'N/A'}</td>
                    <td>{item.data_modificacao}</td>
                    <td>{item.operacao}</td>
                </tr>
            );
        case 'bk_produto':
            return (
                <tr key={index}>
                    <td>{item.codigo_barras}</td>
                    <td>{item.descricao}</td>
                    <td>{item.valor_unitario ? item.valor_unitario.toFixed(2) : 'N/A'}</td>
                    <td>{item.data_modificacao}</td>
                    <td>{item.operacao}</td>
                </tr>
            );
        case 'bk_venda':
            return (
                <tr key={index}>
                    <td>{item.id_funcionario}</td>
                    <td>{item.id_pedido}</td>
                    <td>{item.id_cliente}</td>
                    <td>{item.pontos}</td>
                    <td>{item.data_modificacao}</td>
                    <td>{item.operacao}</td>
                </tr>
            );

    }
}

export default BackupDetails;