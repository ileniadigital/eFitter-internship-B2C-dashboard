import '../css/MaterialsGlossary.css'; //Import CSS styling

// Import components
import SearchBar from './SearchBar';
import Sort from './Sort';
import Filter from './Filter';
export default function MaterialsComposition(){
    return(
        <div className="materialsComposition-container">
            <h1>Materials Glossary🧵</h1>
            <div className="search-container">
                {/* Search bar */}
                <SearchBar/>
                <Sort/>
                <Filter/>
            </div>
        </div>
    );
}