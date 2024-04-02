// 20. wir erstellen eine komponente um alle artikel die in dem warenkorb sind abzubilden und exportieren es
// um es in der komponente "Cart.jsx" zu importieren damit alles auf dem interface angezeigt wird und verbinden
// das ganze mit dem prop "cartItem"
import { useDispatch } from "react-redux"
import dataDishes from "../../data/dataDishes"
import { removeItemFromCart } from "../../redux/cartSlice"

const CartItem = ({ cartItem }) => {
    console.log(cartItem)

// 24 mit der methode "find" gleichen wir die gesuchte "id" mit der "dishId" ab, wenn die übereinstimmen so soll
// das programm den artikel in den korb tun
    const dishes = dataDishes.find(item => item.id === cartItem.dishId)
// 28 ist für die veränderung des zustandes verantwotlich, in diesem fall wenn wir etwas aus dem korb entfernen,
// unten schreiben wir dann die aktion durch bei dem "img" im "span" tag
    const dispatch = useDispatch();
    console.log(dishes)

    return (
        <div>
{/* 24.1 damit bilden wir den namen des gerichts was wir in dem warenkorb reingetan haben ab */}
            <p>{ dishes.name }</p>
{/* 23. durch diese schreibweise wird die stückzahl unserer artikel abgebildet, wieviel wir in den korb reingetan
haben */}
            <p>{ cartItem.quantity } Portion(en)</p>
{/* 24.2 hier bilden wir unseren preis ab und multiplizieren es mit der anzahl des artikels die in den korb kommt */}
            <p>Preis: {dishes.price * cartItem.quantity} Euro</p>
{/* 28.1 hier schreiben wir funktion das artikel aus dem ordner entfernt werden, wir schreiben es in dem tag "span"
durch, wir können es auch bei "img" einsetzen */}
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
{/* 26 wir importiere mit dieser schreibweise das icon für löschen aus dem "public" ordner */}
                <img className="icon" src={process.env.PUBLIC_URL + `/pics/trash.png`} alt="trash" />
            </span>
        </div>
    )
}

export default CartItem