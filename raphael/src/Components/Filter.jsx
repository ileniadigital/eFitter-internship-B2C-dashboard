import '../css/Dropdown.css'; //Import CSS styling
//Drop down menu of supported brands
export default function Filter(){
    return (
        <div className="brandsMenu-container">
            <select className="brands" default="Filter">
                <option value="none" selected disabled hidden>Filter</option> 
                {/* Make this an array from pulled data */}
                <option value="manMade">Man-made</option>
                <option value="natural">Natural</option>
            </select>
        </div>
    );
}

// To be changed to pull all brands from database