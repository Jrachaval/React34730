/* import logo from './logo.svg'; */
import './App.css';
import CartWidget from './components/CartWidget';
import ItemCount from './components/ItemCount';
import Itemlistcontainer from './components/Itemlistcontainer';
import NavBar from './components/NavBar';



function App() {


  return (
    
    <div className='container'>
      <NavBar/>
      
      <Itemlistcontainer/>



      <ItemCount/><CartWidget/>
      

      
    
    </div>
    

    
    
    
    

  );
}

export default App;
