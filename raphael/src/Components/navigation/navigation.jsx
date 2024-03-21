import logo from './logo/eFitter_burgundy_wordmark.png'; //Import logo
import styles from './navigation.module.css'; //Import CSS styling

// Navigation Bar component
export default function Navigation() {
    return (
        <div className={styles.navigationContainer}>
            <nav className={styles.navigation}>
                {/* wordmark logo */}
                <div className={styles.logoContainer} >
                    <img src={logo.src} alt="eFitter logo" className={styles.logo}/>
                </div>
            </nav>
        </div>
    );
}