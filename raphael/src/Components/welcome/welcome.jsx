import styles from './welcome.module.css';  //Import CSS styling    
//Welcome message
export default function Welcome() {
    let name = "Raphael";
    return(
        <div className={styles.welcomeContainer}>
            <h1 className="welcome">Hi {name}! 👋</h1>
        </div>
    );
}