import styles from './search-bar.module.css'; // Import CSS styling
import { useRouter } from "next/router"; // Import router from next.js
import { useState, ChangeEvent } from "react";

import { BiSearch } from "react-icons/bi";

// interface iDefault {
//     defaultValue: string | null;
// }

// export const SearchBar = ({ defaultValue }: iDefault) => {
//     const router = useRouter();
//     const [inputValue, setValue] = useState(defaultValue)

//     const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//         const inputValue = event.target.value
//         setValue(inputValue);
//     }

//     const handleSearch = () => {
//         if (router) {
//             if (inputValue) {
//                 return router.push(`/search/${inputValue}`)
//             } else {
//                 router.push(`/`)
//             }
//         } else {
//             console.error("Router is not available."); // Handle the case when router is not available
//         }
//     }

//     const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
//         if (event.key === 'Enter') {
//             handleSearch();
//         }
//     }
export default function SearchBar() {
    return (
        <div className={styles.searchBarContainer}>
            <label htmlFor="inputId" className={styles.iconContainer}><BiSearch className={styles.searchIcon} /></label>
            <input
                type="text"
                id="inputID"
                placeholder="Search for a material "
                // value={inputValue ?? ""}
                // onChange={handleChange}
                // onKeyDown={handleKeyPress}
                className={styles.search} // Use styles from CSS module
            />
        </div>
    );
}
