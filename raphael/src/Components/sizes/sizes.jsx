import styles from './sizes.module.css'; //Import CSS styling
//Import components
import SizeCard from '../size-card/size-card';
export default function Sizes() {
    return(
        <div className={styles.sizeCards}>
            <SizeCard category={"Tops"}/>
            <SizeCard category={"Bottoms"}/>
            <SizeCard category={"One-pieces"}/>
            <SizeCard category={"Outerwear"}/>
      </div>
    );
}