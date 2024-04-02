import React from 'react';
import styles from './materials-display.module.css';

export default function MaterialsDisplay({ materials }) {
    return (
        <div className={styles.materialsContainer}>
            <ul className={styles.list}>
                {materials.map((material, index) => (
                    <li className={styles.brand} key={index}>
                        <div className={styles.name}>{material.name}</div>
                        <div className={styles.description}>{material.description}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
