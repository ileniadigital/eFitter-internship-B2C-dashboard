import styles from './dropdown.module.css'; //Import CSS styling
//Drop down menu of supported brands
export default function Sort(){
    return (
        <div className={styles.brandsMenucontainer}>
            <select className={styles.brands}>
                <option value="" default id="defaultOption">Sort</option> 
                {/* Make this an array from pulled data */}
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
                <option value="waterUsage">Water Usage</option>
                <option value="carbonFootprint">Carbon Footprint</option>
            </select>
        </div>
    );
}

// To be changed to pull all brands from database