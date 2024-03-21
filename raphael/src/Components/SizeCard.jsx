import '../css/SizeCard.css'; //Import CSS styling
//Pill card for sizes of each category
export default function SizeCard({category}) {
    return (
        <div className="size-card">
            <h2 className='size'>M</h2>
            <h2 className="size-category">{category}</h2>
        </div>
    );
}