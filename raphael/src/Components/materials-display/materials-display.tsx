import styles from './materials-display.module.css'; //Importing CSS file
import { useEffect, useState } from 'react';

// Import data
import { fetchProductCompositions } from '../../data/api';

//MaterialsDisplay component to display materials 
export default function MaterialsDisplay() {
    const [materials, setMaterials] = useState([]);

    // Fetch retailers data from the API
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

    const options = materials.map((material) => (material.name));
    console.log(options);

    return (
        <div className={styles.materialsContainer}>
            <h1>Materials Display</h1>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
        </div>
    )
}