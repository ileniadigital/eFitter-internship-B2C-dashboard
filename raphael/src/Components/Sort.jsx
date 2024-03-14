import '../css/Dropdown.css'; //Import CSS styling
//Drop down menu of supported brands
export default function Sort(){
    return (
        <div className="brandsMenu-container">
            <select className="brands">
                <option value="none" selected disabled hidden>Sort</option> 
                {/* Make this an array from pulled data */}
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
                <option value="waterUsage">Water Usage</option>
                <option value="carbonFootprint">Carbon Footprint</option>
            </select>
        </div>
    );
}

// To be changed to pull all brands from database