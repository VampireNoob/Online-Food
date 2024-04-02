// werden automatisch importiert wenn wir die benennungen unten durchschreiben
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/dishesSlice";

// 8. hier bilden wir die ganzen kategorien ab durch die verwendung von prop "category" aus der komponente
// "AllCategories.jsx" auf dem interface ab
const Filter = ({ category }) => {

// 16. dieser hook erlaubt es uns beim klick unseren zustand zu verändern, und bei dem tag "p" schreiben wir
// die logik durch
    const dispatch = useDispatch();
// 13. wir erstellen eine konstante um eine verbindung zu "dishesSlice.jsx" zu bekommen, damit wir sachen
// auswählen können
    const selectedCategory = useSelector(getSelectedCategory);

    return(
        <div>
{/* 13.1 in diesem tag benutzen wir den ternary operator um die kategorien im einzel fall farblich zu markieren
dazu gleichen wir die "selectedCategory" an die "category" an und die klassen namen, die wir in "App.css" durchschreiben
werden, die funktion "filterCategory" importieren wir der komponente "dishesSlice.jsx" */}
            <p  onClick={() => {dispatch(filterCategory(category))}}// 16.1 wir filtern unsere objekte
                className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>
                { category }</p>
        </div>
    )
}

export default Filter;