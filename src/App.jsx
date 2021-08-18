import Navbar from './components/Navbar/Navbar';
import 'bulma/css/bulma.min.css';
import './styles/main.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";



function App() {
  return (
    <>

    <BrowserRouter>   
      <Navbar />
      <Switch>
      <Route exact path="/" component={ItemListContainer} />
      <Route exact path='/item/:id' component={ItemDetailContainer} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
