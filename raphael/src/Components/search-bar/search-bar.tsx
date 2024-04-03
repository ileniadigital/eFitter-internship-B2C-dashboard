import React from 'react';
import styles from './search-bar.module.css'; //Import styling
import { BiSearch } from 'react-icons/bi'; //Import search icon

//Search bar component
export default function SearchBar({ onSearch }) {
    // Handle search input
    const handleChange = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className={styles.searchBarContainer}>
            <label htmlFor="inputId" className={styles.iconContainer}><BiSearch className={styles.searchIcon} /></label>
            <input
                type="text"
                id="inputID"
                placeholder="Search for a material "
                className={styles.search}
                onChange={handleChange}
            />
        </div>
    );
}
