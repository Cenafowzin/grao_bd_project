import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Loja() {


    const [lojas, setLojas]= useState ([]);

    useEffect(() => {
        loadLojas();
    },[]);

    const loadLojas = async () => {
        const result = await axios.get('http://localhost:8080/lojas');
        setLojas(result.data);
    };

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">Id Loja</th>
                            <th scope="col">Rua</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Numero</th>
                            <th scope="col">Opçoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lojas.map((loja, index) => (
                            <tr>
                            <th scope="row" key ={index}>{index + 1}</th>
                            <td>{loja.rua}</td>
                            <td>{loja.cidade}</td>
                            <td>{loja.numero}</td>
                            <td>
                                <button className="btn btn-primary mx-2">Ver</button>
                                <button className="btn btn-outline-primary mx-2">Editar</button>
                                <button className="btn btn-danger mx-2">Deletar</button>
                            </td>
                            
                        </tr>

                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
