import React, { useState } from 'react';
import BackupDetails from './BackupDetails'; 

function BackupSelector() {
    const [selectedBackup, setSelectedBackup] = useState('');

    const handleBackupChange = (event) => {
        setSelectedBackup(event.target.value);
    };

    return (
        <div>
            <h1>Selecionar Backup</h1>
            <select value={selectedBackup} onChange={handleBackupChange} className="form-select">  {/* Corrigido aqui */}
                <option value="">Selecione um tipo de backup</option>
                <option value="bk_funcionario">Backup de Funcionários</option>
                <option value="bk_pedido">Backup de Pedidos</option>
                <option value="bk_produto">Backup de Produtos</option>
                <option value="bk_venda">Backup de Vendas</option>
            </select>

            {selectedBackup && <BackupDetails backupType={selectedBackup} />}
        </div>
    );
}

export default BackupSelector;
