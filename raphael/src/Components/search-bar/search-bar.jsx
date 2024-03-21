import styles from './search-bar.module.css'; //Import CSS styling

import { useRouter } from "next/router"; //Import router from next.js
// Page size
const PAGE_SIZE=2;

const type={
    "man-made": "man-made",
    "natural": "natural"

};

export default function SearchBar(props){
    return (
        <div className={styles.earchBarContainer}>
            <input type="text" id={styles.search} placeholder="Search for a material"></input>
            <button type="submit" id={styles.searchButton}>Search</button>
        </div>
    );
}