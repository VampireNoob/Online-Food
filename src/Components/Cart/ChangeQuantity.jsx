// 17. wir erstellen eine datei in dem ordner "Cart" die wir mit der komponente "Dish.jsx" über die props "quantity"
// und "setQuantity" verbinden um unseren ausgangszustand und veränderten zustand später abzubilden und mit "quantity"
// bilden wir unten die ausgangszahl(1) auf dem interface ab 
const ChangeQuantity = ({ quantity, setQuantity }) => {

// 18. wir erstellen zwei konstanten mit einer funktion um die anzahl der gerichte zu verändern mit "addQuantity"
// addieren wir und mit "removeQuantity" subrachieren wir die stückzahl
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const removeQuantity = () => {
// mit dieser zeile verhindern wir das wir bei den zahlen weniger als 1 gehen können
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    return (
        <div>
{/* 18.1 hier schreiben wir in die knöpfe die funktionsnamen durch die wir ober erläutert haben */}
            <button onClick={removeQuantity}>-</button>
{/* wenn wir die zeichen neben der zahlen haben möchten so wickeln wir es in "span" ein, wenn wir es in "p"
einwickeln so werden die zeichen obenhalb und unterhalb der zahl abgebildet */}
            <span>{ quantity }</span>
            <button onClick={addQuantity}>+</button>
        </div>
    )
}

export default ChangeQuantity;