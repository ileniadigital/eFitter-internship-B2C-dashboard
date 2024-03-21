import styles from './dropdown.module.css'; //Import CSS styling

//Drop down menu
export default function DropDown(props){
    const { options, defaultOption } = props;

    return (
        <div className={styles.menucontainer}>
            <select className={styles.optionsContainer}>
                <option value="" default id={styles.defaultOption} >{defaultOption}</option> 
                {options.map((option) => (
                    <option key={option.value} className={styles.options} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
}