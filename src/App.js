import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '../src/pages/Main';
import Product from '../src/pages/Product';
import EditarProduto from '../src/pages/EditarProduto';
import Navbar from '../src/components/Navbar';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/product/:id" exact component={Product} />
        <Route path="/product/editar/:id" exact component={EditarProduto} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
