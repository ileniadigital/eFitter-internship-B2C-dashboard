import styles from './dropdown.module.css'; //Import styling
//Drop down menu of supported brands
export default function Filter(){
    return (
        <div className={styles.brandsMenucontainer}>
            <select className={styles.brands}>
                <option value="" default id="defaultOption" >Filter</option> 
                {/* Make this an array from pulled data */}
                <option value="manMade">Man-made</option>
                <option value="natural">Natural</option>
            </select>
        </div>
    );
}

// To be changed to pull all brands from database