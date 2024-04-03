import React from 'react';
import styles from './materials-display.module.css'; //Import styling

// Materials display component
//Display the materials
export default function MaterialsDisplay({ materials }) {
    return (
        <div className={styles.materialsContainer}>
            {materials.length > 0 ? (
                <ul className={styles.list}>
                    {materials.map((material, index) => (
                        <li className={styles.brand} key={index}>
                            <div className={styles.name}>{material.name}</div>
                            <div className={styles.description}>{material.description}</div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles.error}>No materials found</p>
            )}
        </div>
    );
}
