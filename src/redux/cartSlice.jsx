// wird automatisch importiert beim durchschreiben vom hook "createSlice"
import { createSlice } from "@reduxjs/toolkit";

// 19. wir erstellen eine konstante für unseren korb um da die sachen rein zu tun, das gleichen wir einem leeren
// massiv an "cartItems[]"
export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
// 19.1 mit dieser schreibweise fügen wir artikel in unseren wahrenkorb hinzu, dazu verwenden wir zwei argumente
// (state, action) und mit "push" tun wir die sachen immer ans ende unseren massivs, durch die "dishId" kriegen wir
// zugang zu den artikeln die bei uns in der komponente "dataDishes.jsx" befinden und mit "quantity" können wir die
// anzahl die wir in den korb legen verändern, 
        addItemToCart: (state, action) => {
// 29 mit dieser constante gleichen wir die "id" der gerichte einem zeitstempel zu, durch "new Date().getTime()"
// dadurch wird das entfernen der elemente aus dem korb vereinfacht und es ist eine schreibweise um die sachen zu
// entfernen, dann schreiben noch bei "push" noch folgendes auf damit das programm weiß was es machen soll bzw.
// welchen artikel es entfernen soll
            const timeId = new Date().getTime()
            state.cartItems.push({
                id: timeId,
                dishId: action.payload.dish.id,
                quantity: action.payload.quantity,
// 25. mit der formel in der zeile "totalPrice" ermiteln wir die gesamtsumme
                totalPrice: action.payload.quantity * action.payload.dish.price
            })
        },
// 27. hier schreiben wir die logik durch, dass wenn wir ein artikel löschen so wird er nicht mehr in den neuen
// massiv "[]" mit aufgenommen, dazu verwenden wir die mothode "filter" und exportieren es unten
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        }
    }
})

// 25.1 mit dieser schreibweise addieren wir die ganzen summen "totalPrice" siehe oben 25, mit der summe "total"
// aus dem korb zu einer gasamtsumme, verwenden dafür die methode "reduce" um alles zu addieren und verbinden es
// mit der komponente "Cart.jsx"
export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}

// 19.2 hier exportieren wir ganzen aktionen um darauf zugriff in anderen komponenten zu kriegen
// erste zeiele ist für unseren ausgangszustand, die benennung "cart" und unseren massiv "cartItems" zuständig
// zweie zeile ist für die funktion "addItemToCart" und "removeItemFromCart" zuständig
// dritte zeile ist für die aktion zuständig
export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart } = slice.actions;
export default slice.reducer;