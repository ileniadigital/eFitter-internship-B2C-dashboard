import '../css/Sizes.css'; //Import CSS styling
//Import components
import SizeCard from './SizeCard';
export default function Sizes() {
    return(
        <div className="size-cards">
            <SizeCard category={"Tops"}/>
            <SizeCard category={"Bottoms"}/>
            <SizeCard category={"One-pieces"}/>
            <SizeCard category={"Outerwear"}/>
      </div>
    );
}