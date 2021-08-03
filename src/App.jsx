import Navbar from './components/Navbar/Navbar';
import 'bulma/css/bulma.min.css';
import './styles/main.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting="Hello, world!"/>
    </>
  );
}

export default App;
