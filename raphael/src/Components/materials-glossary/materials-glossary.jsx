import styles from './materials-glossary.module.css'; //Import CSS styling

// Import components
import SearchBar from '../search-bar/search-bar';
import Sort from '../drop-down/sort';
import Filter from '../drop-down/filter';
export default function MaterialsComposition(){
    return(
        <div className={styles.materialsCompositioncontainer}>
            <h1>Materials Glossary🧵</h1>
            <div className={styles.searchcontainer}>
                {/* Search bar */}
                <SearchBar/>
                <Sort/>
                <Filter/>
            </div>
        </div>
    );
}