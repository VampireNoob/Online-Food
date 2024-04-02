// 12. hier importieren wir aus dem redux den toolkit "createSlice"
import { createSlice } from "@reduxjs/toolkit";

// mit dieser konstante werden wir auf die einzelnen kategorien zugreifen können
export const dishesSlice = createSlice({
// hier schreiben wir den namen durch den wir später verwenden werden
    name: 'dishes',
// hier schreiben wir folgendes durch was angezeigt wird wenn wir unseren interface öffnen
    initialState: {
        selectedCategory: 'ALLES'
    },
    reducers: {
// 14 hier schreiben die logik durch das wenn eine kategorie angeklickt worden ist so wird sie
// die dazugehörigen elemente abbilden, die funktion selber schreiben wir in der komponente
// "Filter.jsx", nicht vergessen es auch unten zu exportieren
        filterCategory: (state, action) => {
        state.selectedCategory = action.payload;
        }
    }
})

// 14.1 hier exportieren wir ganzen aktionen um darauf zugriff in anderen komponenten zu kriegen
// erste zeiele ist für unsere benennung "dishes" und unseren ausgewählte kategorie "selectedCategory" zuständig
// zweie zeile ist für die funktion "filterCategory" zuständig
// dritte zeile ist für die aktion zuständig
export const getSelectedCategory = state => state.dishes.selectedCategory;
export const { filterCategory } = dishesSlice.actions;
export default dishesSlice.reducer;