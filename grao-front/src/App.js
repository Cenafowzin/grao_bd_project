//URLs

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gerente from './users/Gerente';
import Funcionarios from './pages/Funcionarios';
import VerFuncionario from './Funcionario/VerFuncionario';
import AddFuncionario from './Funcionario/AddFuncionario';
import EditFuncionario from './Funcionario/EditFuncionario';
import Produtos from './pages/Produtos';
//ver produto
import AddProduto from './Produto/AddProduto';
import EditProduto from './Produto/EditProduto';
import Clientes from './pages/Clientes';
//ver cliente
import AddCliente from './Cliente/AddCliente';
import EditCliente from './Cliente/EditCliente';
//ver loja
//add loja
//edit loja
import Home from './pages/Home';
import AddLoja from './Loja/AddLoja';
import EditLoja from './Loja/EditLoja';
import ViewLoja from './Loja/ViewLoja';
import { LojaProvider } from './Loja/LojaContext';
import Lojas from './pages/Lojas';

function App() {
  return (
    <LojaProvider>
      <div className="App">
        <Router>
        <Navbar />
        <Routes>
        <Route exact path = "/" element = {<Lojas/>} />
          <Route exact path = "/lojas" element = {<Lojas/>} />
          <Route exact path = "/criarLoja" element = {<AddLoja/>} />
          <Route exact path = "/editarLoja/:id_loja" element = {<EditLoja/>} />
          <Route exact path = "/verLoja/:id_loja" element={<ViewLoja />} />
          <Route exact path = "/gerente" element = {<Gerente />} />
          <Route exact path = "/produtos" element = {<Produtos />} />
          <Route exact path = "/clientes" element = {<Clientes />} />
          <Route exact path = "/criarCliente" element = {<AddCliente/> } />
          <Route exact path = "/criarProduto" element = {<AddProduto/> } />
          <Route exact path = "/editarProduto/:codigo_barras" element={<EditProduto />} />
          <Route exact path = "/editarCliente/:id_cliente" element={<EditCliente />} />
          <Route exact path = "/funcionarios" element = {<Funcionarios/> } />
          <Route exact path = "/detalhesFuncionario" element = {<VerFuncionario/> } />
          <Route exact path = "/editarFuncionario/:id_funcionario" element = {<EditFuncionario/> } />
          <Route exact path = "/criarFuncionario" element = {<AddFuncionario/> } />
        </Routes>
        </Router>
      </div>
    </LojaProvider>
  );
}

export default App;
