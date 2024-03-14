import '../css/Dropdown.css'; //Import CSS styling
//Drop down menu of supported brands
export default function BrandsMenu(){
    return (
        <div className="brandsMenu-container">
            <select className="brands">
                {/* Make this an array from pulled data */}
                <option value="brand-item">Zara</option>
                <option value="brand-item">H&M</option>
            </select>
        </div>
    );
}

// To be changed to pull all brands from database