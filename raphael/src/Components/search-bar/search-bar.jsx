import styles from './search-bar.module.css'; //Import CSS styling

export default function SearchBar(){
    return (
        <div className={styles.earchBarContainer}>
            <input type="text" id="search" placeholder="Search for an item..."></input>
            <button type="submit" id={styles.searchButton}>Search</button>
        </div>
    );
}