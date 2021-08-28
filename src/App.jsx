import Navbar from './components/Navbar/Navbar';
import 'bulma/css/bulma.min.css';
import './styles/main.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import Categories from "./components/pages/Categories"
import Cart from "./components/pages/Cart"
import CartProvider from './components/context/CartContext' 



function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>   
        <Navbar />
        <Switch>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path='/:category' component={Categories} />
        <Route exact path='/item/:id' component={ItemDetailContainer} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
