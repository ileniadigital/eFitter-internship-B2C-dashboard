import styles from './style-guru.module.css'; //Import CSS styling
import { MdArrowDropDownCircle } from "react-icons/md";
//Style Guru Persona component
export default function StyleGuru(){
    let stylegurupersona = "Free Spirit";
    return(
        <div className={styles.styleGurucontainer}>
            <div className={styles.personaContainer}>
                <h3 className={styles.persona}>Style Guru Persona</h3>
            </div>
            <div className={styles.arrowContainer}>
                {/* Style Guru Persona */}
                <h2>{stylegurupersona}</h2>
                {/* Drop Down Menu */}
                <button className={styles.styleGuruarrow}><MdArrowDropDownCircle size={30} /></button>
            </div>
            {/* Newsletter */}
            <div className={styles.newsletter}>
                <p>Newsletter goes here</p>
            </div>
            
        </div>
    );

}