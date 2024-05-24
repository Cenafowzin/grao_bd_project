//URLs

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gerente from './users/Gerente';
import Funcionarios from './pages/Funcionarios';
import Loja from './pages/Lojas';
import Home from './pages/Home';
import VerFuncionario from './Funcionario/VerFuncionario';
import AddFuncionario from './Funcionario/AddFuncionario';
import Produtos from './pages/Produtos';
import AddProduto from './Produto/AddProduto';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route exact path = "/" element = {<Home/>} />
        <Route exact path = "/lojas" element = {<Loja/>} />
        <Route exact path = "/gerente" element = {<Gerente />} />
        <Route exact path = "/produtos" element = {<Produtos />} />
        <Route exact path = "/criarProduto" element = {<AddProduto/> } />
        <Route exact path = "/funcionarios" element = {<Funcionarios/> } />
        <Route exact path = "/detalhesFuncionario" element = {<VerFuncionario/> } />
        <Route exact path = "/criarFuncionario" element = {<AddFuncionario/> } />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
