import styles from './dropdown.module.css'; //Import CSS styling

//Drop down menu
export default function DropDown(props){
    const { options, defaultOption } = props;
    console.log(options);
    console.log(defaultOption);

    return (
        <div className={styles.menucontainer}>
            <select className={styles.optionsContainer}>
                <option value="" default id={styles.defaultOption} disable hidden >{defaultOption}</option> 
                {options.map((option) => (
                    <option key={option} className={styles.option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}