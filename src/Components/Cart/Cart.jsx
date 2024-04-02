import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";

// 2. hier erstellen wir eine konstante und exportieren die auch, damit die sich mit "App.js" verbindet
const Cart = () => {

// 21. hier stellen wir eine verbindung mit dem hook "useSelector" zu der komponente "cartSlice.jsx"
    const cartItems = useSelector(getCartItems);
// 25.2 durch den hook "useSelector" verbinden wir die komponente "cartSlice.jsx" mit dieser "Cart.jsx"
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
{/* 9. um ein bild aus dem hauptordner "public" und ordner "pics" zu importieren schreiben wir folgendes durch */}
            <img className="cart" src={process.env.PUBLIC_URL + `/pics/carts.png`} alt="cart" />
{/* 25.3 hier bilden wir dann unseren gesamtbetrag ab */}
            <h3>GESAMT: { totalPrice } Euro</h3>
{/* 21.1 durch die methode "map" erhalten wir zugriff auf einzelne artikel die in die komponente "CartItem.jsx"
zugefügt werden und verbinden es durch den prop "cartItem" mit der selbigen komponente  */}
            {cartItems.map(cartItem => <CartItem cartItem={cartItem} />)}
        </div>
    )
}

export default Cart;