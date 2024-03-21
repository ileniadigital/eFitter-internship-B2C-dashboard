import styles from './dropdown.module.css'; //Import styling
//Drop down menu of supported brands
export default function BrandsMenu(){
    return (
        <div className={styles.brandsMenucontainer}>
            <select className={styles.brands}>
                {/* Make this an array from pulled data */}
                <option value="brand-item" default id="defaultOption">Select a brand</option>
                <option value="brand-item">Zara</option>
                <option value="brand-item">H&M</option>
            </select>
        </div>
    );
}

// To be changed to pull all brands from database