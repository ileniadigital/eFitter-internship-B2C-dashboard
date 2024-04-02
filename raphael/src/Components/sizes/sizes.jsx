import styles from './sizes.module.css'; //Import CSS styling
//Import components
import SizeCard from '../size-card/size-card';
import { useEffect, useState } from 'react';

//Import data
import { fetchCategories } from '../../data/api';

export default function Sizes() {
    // Fetch categories data from the API
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (error) {
            }
        };
        fetchData();
    }, []);

    const options = categories.map((category) => (category.name));
    console.log(options);
    return(
        <div className={styles.sizeCards}>
            {options.map((category) => (
                <SizeCard category={category} key={category} />
            ))}
        </div>
    );
}