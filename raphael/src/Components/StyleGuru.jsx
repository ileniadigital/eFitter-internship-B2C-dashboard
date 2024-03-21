import '../css/StyleGuru.css'; //Import CSS styling
//Style Guru Persona component
export default function StyleGuru(){
    let stylegurupersona = "Free Spirit";
    return(
        <div className="styleGuru-container">
            <h3>Style Guru Persona</h3>
            <div className="toggle-container">
                <h2>{stylegurupersona}</h2>
                {/* toggle goes here */}
                <button className="styleGuru-toggle">TOGGLE ICON</button>
            </div>
            <p>Newsletter goes here</p>
            
        </div>
    );

}