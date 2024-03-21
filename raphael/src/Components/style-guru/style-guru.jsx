import styles from './style-guru.module.css'; //Import CSS styling
//Style Guru Persona component
export default function StyleGuru(){
    let stylegurupersona = "Free Spirit";
    return(
        <div className={styles.styleGurucontainer}>
            <h3>Style Guru Persona</h3>
            <div className={styles.toggleContainer}>
                <h2>{stylegurupersona}</h2>
                {/* toggle goes here */}
                <button className={styles.styleGurutoggle}>TOGGLE ICON</button>
            </div>
            <p>Newsletter goes here</p>
            
        </div>
    );

}