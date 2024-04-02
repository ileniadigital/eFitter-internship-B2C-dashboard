import styles from './materials-display.module.css'; //Importing CSS file
import { useEffect, useState } from 'react';

// Import data
import { fetchProductCompositions } from '../../data/api';

//MaterialsDisplay component to display materials 
export default function MaterialsDisplay() {
    const [materials, setMaterials] = useState([]);

    // Fetch materials data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProductCompositions();
                setMaterials(data);
            } catch (error) {
            }
        };
        fetchData();
    }, []);

    const options = materials.map((material) => ({ name: material.name, description: material.description }));
    console.log(options);

    return (
        <div className={styles.materialsContainer}>
            <ul className={styles.list}>
                {options.map((option, index) => (
                    <li className={styles.brand} key={index}>
                        <div className={styles.name}>{option.name}</div>
                        <div className={styles.description}>{option.description}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}