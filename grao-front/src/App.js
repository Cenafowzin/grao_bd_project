import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gerente from './users/Gerente';
import Funcionarios from './pages/Funcionarios';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path = "/" element = {<Home />} />
        <Route exact path = "/gerente" element = {<Gerente />} />
        <Route exact path = "/funcionarios" element = {<Funcionarios/> } />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
