//URLs

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Funcionarios from './pages/Funcionarios';
import ViewFuncionario from './Funcionario/ViewFuncionario';
import AddFuncionario from './Funcionario/AddFuncionario';
import EditFuncionario from './Funcionario/EditFuncionario';
import Produtos from './pages/Produtos';
//ver produto
import AddProduto from './Produto/AddProduto';
import EditProduto from './Produto/EditProduto';
import Clientes from './pages/Clientes';
import AddCliente from './Cliente/AddCliente';
import EditCliente from './Cliente/EditCliente';
import AddLoja from './Loja/AddLoja';
import EditLoja from './Loja/EditLoja';
import ViewLoja from './Loja/ViewLoja';
import { LojaProvider } from './Loja/LojaContext';
import Lojas from './pages/Lojas';
import AddVenda from './Venda/AddVenda';
import { useEffect, useState } from 'react';
import FazerLogin from './Login/FazerLogin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const renderPrivateRoute = (Component, props) => {
    return isAuthenticated ? <Component {...props} /> : <Navigate to="/login" replace />;
  };

  return (
    <LojaProvider>
      <div className="App">
        <Router>
        <Navbar />
        <Routes>
          <Route exact path = "/login" element={<FazerLogin setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path="/" element={renderPrivateRoute(Lojas)} />
          <Route path="/lojas" element={renderPrivateRoute(Lojas)} />
          <Route path="/criarLoja" element = {renderPrivateRoute(AddLoja)} />
          <Route path="/editarLoja/:id_loja" element = {renderPrivateRoute(EditLoja)} />
          <Route exact path = "/verLoja/:id_loja" element={renderPrivateRoute(ViewLoja)} />
          <Route exact path = "/clientes" element = {renderPrivateRoute(Clientes)} />
          <Route exact path = "/criarCliente" element = {renderPrivateRoute(AddCliente)} />
          <Route exact path = "/editarCliente/:id_cliente" element={renderPrivateRoute(EditCliente)} />
          <Route exact path = "/produtos" element = {renderPrivateRoute(Produtos)} />
          <Route exact path = "/criarProduto" element = {renderPrivateRoute(AddProduto)} />
          <Route exact path = "/editarProduto/:codigo_barras" element={renderPrivateRoute(EditProduto)} />
          <Route exact path = "/funcionarios" element = {renderPrivateRoute(Funcionarios)} />
          <Route exact path = "/criarFuncionario" element = {renderPrivateRoute(AddFuncionario)} />
          <Route exact path = "/editarFuncionario/:id_funcionario" element = {renderPrivateRoute(EditFuncionario)} />
          <Route exact path = "/verFuncionario/:id_funcionario" element={renderPrivateRoute(ViewFuncionario)} />
          <Route exact path = "/realizarVenda" element = {renderPrivateRoute(AddVenda)} />
        </Routes>
        </Router>
      </div>
    </LojaProvider>
  );
}

export default App;
