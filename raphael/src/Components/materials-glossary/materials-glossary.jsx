import styles from './materials-glossary.module.css'; //Import CSS styling

// Import components
import SearchBar from '../search-bar/search-bar';
import DropDown from '../drop-down/drop-down';

export default function MaterialsComposition(){
    return(
        <div className={styles.materialsCompositioncontainer}>
            <h1>Materials Glossary🧵</h1>
            <div className={styles.searchcontainer}>
                {/* Search bar */}
                <SearchBar/>
                <DropDown options={['A-Z', 'Z-A', 'Water Consumption', 'Carbon Footprint']} defaultOption={'Sort'}/>
                <DropDown  options={['Man-made', 'Natural']} defaultOption={'Filter'}/>
            </div>
        </div>
    );
}