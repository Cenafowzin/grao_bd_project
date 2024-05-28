import React, { useContext, useEffect, useState } from 'react';
import { LojaContext } from '../Loja/LojaContext';
import BackupDetails from './BackupDetails'; 

function BackupSelector() {
    const [selectedBackup, setSelectedBackup] = useState('');
    const { saveLojaId, saveLojaBairro } = useContext(LojaContext);

    useEffect(() => {
        const timeout = setTimeout(() => {
          saveLojaId(0);
          saveLojaBairro("selecione uma loja");
          }, 1);
          
          return () => clearTimeout(timeout); // Limpa o timeout ao desmontar o componente
      }, []);

    const handleBackupChange = (event) => {
        setSelectedBackup(event.target.value);
    };

    return (
        <div className="container mt-5">
            <div className="py-4">

                <div>
                    <h1>Selecionar Backup</h1>
                    <br/>
                    <select value={selectedBackup} onChange={handleBackupChange} className="form-select">  {/* Corrigido aqui */}
                        <option value="">Selecione um tipo de backup</option>
                        <option value="bk_funcionario">Backup de Funcionários</option>
                        <option value="bk_pedido">Backup de Pedidos</option>
                        <option value="bk_produto">Backup de Produtos</option>
                        <option value="bk_venda">Backup de Vendas</option>
                    </select>

                    {selectedBackup && <BackupDetails backupType={selectedBackup} />}
                </div>
            </div>
        </div>
    );
}

export default BackupSelector;
