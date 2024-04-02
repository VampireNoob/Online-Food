// 4. diese datei erstellen wir in dem ordner "DishesComponent" und exportieren es damit wir es in diesem beispiel
// mit "Dishes.jsx" verbinden können und wir verbinden es noch mit dem prop "dish" was wir in "Dishes.jsx"
// durchgeschrieben haben um zugriff auf die daten der objekte zu kriegen
import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) => {

// 17.2 hier schreiben wir unseren ausgangszustand auf von den portionen das die bei 1 sein sollen
    const [quantity, setQuantity] = useState(1);
// 22.1 dieser hook erlaubt es uns zugriff auf den knopf zu kriegen um den zustand zu verändern
    const dispatch = useDispatch();

    return(
        <div>
{/* 6. durch den prop "dish" kriegen wir hier einzelnen zugang zu den sachen die wir abgebildet haben möchten wie
z.B. "name oder price", für bilder verwenden wir diese schreibweise um alles abbilden zu können und weil wir es
aus einem anderen ordner holen, schreiben wir folgendes durch "./pics/" */}
            <img className="image" src={`./pics/${dish.img}.jpg`} alt="dishes" />
            <h2>{dish.name}</h2>
            <p>{dish.desc}</p>
            <p>{dish.price} Euro</p>
{/* 17.1 hier bauen wir die verbindung zu der komponente "ChangeQuantity.jsx" und gleichen es unserem ausgangzustand
1 an */}
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
{/* 22 in dem knopf schreiben wir die logik aus der komponente "cartSlice.jsx" durch, dass wenn wir auf den knopf
bei einem artikel drücken, so soll das programm es in den korb tun mit dem namen und der stückzahl */}
            <button className="cartbutton" 
                    onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>In den Einkaufskorb</button>
        </div>
    )
}

export default Dish;