import Navbar from './components/Navbar/Navbar';
import 'bulma/css/bulma.min.css';
import './styles/main.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting="Hello, world!"/>
    <ItemDetailContainer />
    </>
  );
}

export default App;
