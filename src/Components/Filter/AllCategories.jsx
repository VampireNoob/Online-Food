import Filter from "./Filter";

// 2. hier erstellen wir eine konstante und exportieren die auch, damit die sich mit "App.js" verbindet
const AllCategories = () => {
    return(
        <div key='id'>
            <h1>Was möchtest du gerne Essen?</h1>
{/* 7. hier verwenden wir ein massiv wo wir die ganzen benenungen der gerichte durchschreiben, das gleichen wir der
methode "map" an, um zugriff auf jedes einzelne objekt zu kriegen, um es in der komponente "Filter.jsx" abzubilden
verwenden wir den prop "category" */}
            {['ALLES', 'VORSPEISE', 'MEERESFRÜCHTE', 'ITALIENISCH', 'SALATE', 'DESSERT'].map(category => 
            <Filter category={ category } />)}
        </div>
    )
}

export default AllCategories;