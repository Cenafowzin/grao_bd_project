import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {


    const [users, setUsers]= useState ([]);

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:8080/lojas');
        setUsers(result.data);
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
                            <th scope="col">Bairro</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                            <tr>
                            <th scope="row" key ={index}>{index + 1}</th>
                            <td>{user.rua}</td>
                            <td>{user.cidade}</td>
                            <td>{user.numero}</td>
                            <td>{user.bairro}</td>
                        </tr>

                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
