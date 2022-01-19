import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './views/Home';
import { ListarCliente } from './views/Cliente/Listar';
import { ListarPedido } from './views/Pedido/Listar';
// import { ListarCompra } from './views/Compra/Listar';
import { ListarServico } from './views/Servico/Listar';
import { ListarProduto } from './views/Produto/Listar';
import { ItemPedido } from './views/Servico/item';
import { ItemCompra } from './views/Produto/item';
import { CadastrarServico } from './views/Servico/Cadastrar';
import { CadastrarProduto } from './views/Produto/Cadastrar';
import { CadastrarCliente } from './views/Cliente/Cadastrar';

import { Menu } from './components/Menu';
import { ListarCompra } from './views/Compra/Listar';
import { CadastrarPedido } from './views/Pedido/Cadastrar';
import { CadastrarCompra } from './views/Compra/Cadastrar';


function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/listar-cliente" component={ListarCliente}/>
          <Route path="/cadastrarcliente" component={CadastrarCliente}/>
          <Route exact path="/listar-pedido" component={ListarPedido}/>
          <Route path="/cadastrarpedido" component={CadastrarPedido}/>
          <Route exact path="/listar-compra" component={ListarCompra}/>
          <Route path="/cadastrarcompra" component={CadastrarCompra}/>
          <Route path="/listar-servico" component={ListarServico}/>
          <Route path="/cadastrarservico" component={CadastrarServico}/>
          <Route path="/listar-pedido/:id" component={ItemPedido}/>
          <Route path="/listar-produto" component={ListarProduto}/>
          <Route path="/cadastrarproduto" component={CadastrarProduto}/>
          <Route path="/listar-compra/:id" component={ItemCompra}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
