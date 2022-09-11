/* import logo from './logo.svg'; */
import './App.css';
import CartWidget from './components/CartWidget';
import ItemCount from './components/ItemCount';
import Itemlistcontainer from './components/Itemlistcontainer';
import NavBar from './components/NavBar';
import Itemdetailcontainer from './components/shop/ItemDetailContainer';



function App() {


  return (
    
    <div className='container'>
      <NavBar/>

      <ItemDetailContainer/>
      
      
      <Itemlistcontainer/>



      <ItemCount/><CartWidget/>
      

      
    
    </div>
    

    
    
    
    

  );
}

export default App;
