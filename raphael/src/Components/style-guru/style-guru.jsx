import styles from './style-guru.module.css'; //Import CSS styling
import { MdArrowDropDownCircle } from "react-icons/md";
import { useState } from 'react';

//Import image
import newsletter from './newsletter-image.png';

//Style Guru Persona component
export default function StyleGuru() {
    let stylegurupersona = "Free Spirit";
    
    // Use state to manage the newsletterOpen state
    const [newsletterOpen, setNewsletterOpen] = useState(false);

    // Toggle the state of newsletterOpen
    function toggleNewsletter() {
        setNewsletterOpen(!newsletterOpen);
    }

    return (
        <div className={styles.styleGurucontainer}>
            <div className={styles.personaContainer}>
                <h3 className={styles.persona}>Style Guru Persona</h3>
            </div>
            <div className={styles.arrowContainer}>
                {/* Style Guru Persona */}
                <h2>{stylegurupersona}</h2>
                {
                    newsletterOpen ? (
                        <button className={`${styles.styleGuruarrow} ${styles.rotated}`} onClick={toggleNewsletter}>
                            <MdArrowDropDownCircle size={30} />
                        </button>
                    ) : (
                        <button className={styles.styleGuruarrow} onClick={toggleNewsletter}>
                            <MdArrowDropDownCircle size={30} />
                        </button>
                    )
                }
            </div>
            {/* Newsletter */}
            {newsletterOpen && (
                <div className={styles.newsletter}>
                    <img src={newsletter.src} alt="placeholder" />
                </div>
            )}
        </div>
    );
}
