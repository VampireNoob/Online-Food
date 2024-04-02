// 10. als erstes importieren wir "redux" mit dem befehl "npm install @reduxjs/toolkit react-redux" in unserem
// terminal, dann erstellen wir einen ordner in "src" mit dem namen "redux" und darin dann drei dateien wie
// "store.jsx, dishesSlice.jsx und cartSlice.jsx" wo wir die logik von unserem einkaufskorb und der klickoption
// durchschreiben

// 11. wir importieren aus den redux den toolkit "configureStore" mit dem "reducer"
import { configureStore } from "@reduxjs/toolkit";
import dishes from './dishesSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
// diese bezeichnungen nehmen wir einmal aus der komponente "dishesSlice.jsx" unter der kategorie "name" um damit
// die gerichte beim namen zu bennenen und aus "cartSlice.jsx" um die anzahl der gerichte in unserem warenkorb
// abzubilden und den preis
        dishes,
        cart
    }
})