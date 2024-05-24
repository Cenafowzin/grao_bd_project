import React from 'react'

export default function Gerente() {
  return <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Gerente</h2>
            <div className='mb-3'>
                <label htmlFor='Nome' className='form-label'>
                    Nome
                </label>
                <input type ={"text"}
                className='form-control'
                placeholder='Digite seu nome'
                nome = "nome"/>
                
            </div>
        
        </div>
    
    
    </div>

    
</div>
  
}
