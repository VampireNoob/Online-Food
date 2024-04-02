// 2. hier erstellen wir eine konstante und exportieren die auch, damit die sich mit "App.js" verbindet
import { useSelector } from "react-redux"
import dataDishes from "../../data/dataDishes"
import Dish from "./Dish"
import { getSelectedCategory } from "../../redux/dishesSlice"

const Dishes = () => {

// 15 hier kriegen wir durch "getSelectedCategory" zugang zu unserem zustand der sich in der komponente
// "dishesSlice.jsx" befindet und durch "useSelector" kann das programm es lesen
    const selectedCategory = useSelector(getSelectedCategory)

    return(
        <div key='id'>
            {dataDishes
// 15.1 durch die methode "filter" filtern wir unsere objekte wenn wir auf eine kategorie klicken, die wir
// mit der benennung aus der komponente "dataDishes.jsx" angleichen, bei "if" schreiben wir noch eine sache
// durch, dass wenn wir auf "ALLES" klicken dann soll uns das programm alle gerichte zeigen  
            .filter(dish => {
                if (selectedCategory === 'ALLES') return true;
                return selectedCategory === dish.category;
            })
// 5. durch die methode "map" erhalten wir zugang zu jedem einzelnen objekt was sich in "dataDishes.jsx" befindet
// und bilden es in verbindung mit der komponente "Dish.jsx" auf dem interface ab, "dish" = prop
            .map(dish => <Dish dish={ dish } />)}
        </div>
    )
}

export default Dishes