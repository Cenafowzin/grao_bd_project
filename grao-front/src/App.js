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
import EditProduto from './Produto/EditProduto';
import EditFuncionario from './Funcionario/EditFuncionario';
import AddLoja from './Loja/AddLoja';
import EditLoja from './Loja/EditLoja';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route exact path = "/" element = {<Home/>} />
        <Route exact path = "/lojas" element = {<Loja/>} />
        <Route exact path = "/criarLoja" element = {<AddLoja/>} />
        <Route exact path = "/editarLoja/:id_loja" element = {<EditLoja/>} />
        <Route exact path = "/gerente" element = {<Gerente />} />
        <Route exact path = "/produtos" element = {<Produtos />} />
        <Route exact path = "/criarProduto" element = {<AddProduto/> } />
        <Route exact path = "/editarProduto/:codigo_barras" element={<EditProduto />} />
        <Route exact path = "/funcionarios" element = {<Funcionarios/> } />
        <Route exact path = "/detalhesFuncionario" element = {<VerFuncionario/> } />
        <Route exact path = "/editarFuncionario/:id_funcionario" element = {<EditFuncionario/> } />
        <Route exact path = "/criarFuncionario" element = {<AddFuncionario/> } />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
