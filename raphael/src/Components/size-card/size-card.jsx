import styles from './size-card.module.css'; //Import CSS styling
//Pill card for sizes of each category
export default function SizeCard({category}) {
    return (
        <div className={styles.sizeCard}>
            <h2 className={styles.size}>M</h2>
            <h2 className={styles.size-category}>{category}</h2>
        </div>
    );
}