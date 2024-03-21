import styles from './materials-glossary.module.css'; //Import CSS styling

// Import components
import SearchBar from '../search-bar/search-bar';
import Sort from '../drop-down/drop-down';
import Filter from '../drop-down/drop-down';
export default function MaterialsComposition(){
    return(
        <div className={styles.materialsCompositioncontainer}>
            <h1>Materials Glossary🧵</h1>
            <div className={styles.searchcontainer}>
                {/* Search bar */}
                <SearchBar/>
                <Sort options={['A-Z', 'Z-A', 'Water Consumption', 'Carbon Footprint']} defaultOption={'Sort'}/>
                <Filter  options={['Man-made', 'Natural']} defaultOption={'Filter'}/>
            </div>
        </div>
    );
}