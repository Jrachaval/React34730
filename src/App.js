/* import logo from './logo.svg'; */
import './App.css';
import CartWidget from './components/CartWidget';
import Itemlistcontainer from './components/Itemlistcontainer';
import NavBar from './components/NavBar';


function App() {

  const mensaje = 'Bienvenido a mi app'
  const estilos = {
    backgroundColor: '#888',
    padding: '20px'
  }


  return (
    
    <div className='container'>
      <NavBar/>
      <CartWidget/>
      <Itemlistcontainer greeting={'REACT 34730'}/>
      

    </div>
    
    

  );
}

export default App;
