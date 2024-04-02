import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';

// 1. wir erstellen im "src" ordner einen hauptordner namens "Component" worin wir noch drei ordner namens "Cart,
// DishesComponent und Filter" erstellen und in diesen ordnern erstellen wir die jeweiligen dateien namens 
// "Cart.jsx, AllCategories.jsx und Dishes.jsx" die wir hierhin importieren
function App() {

  return (
    <div className="App">
      <div className='block'>
        <AllCategories />
        <Cart />
      </div>
      <div className='block'>
        <Dishes />
      </div>
    </div>
  );
}

export default App;
