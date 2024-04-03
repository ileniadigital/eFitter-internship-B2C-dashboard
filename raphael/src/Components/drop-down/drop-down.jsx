import React from 'react';
import styles from './dropdown.module.css'; // Import CSS styling

export default function DropDown(props) {
    const { options, defaultOption, onSelect } = props;

    // Handle dropdown selection changes
    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        onSelect(selectedOption);
    };

    return (
        <div className={styles.menucontainer}>
            <select className={styles.optionsContainer} onChange={handleSelectChange}>
                {/* Default option */}
                <option value="" default id={styles.defaultOption} disabled hidden>{defaultOption}</option> 
                {/* Other options */}
                {options.map((option) => (
                    <option key={option} className={styles.option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}
