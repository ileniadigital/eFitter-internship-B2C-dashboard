import '../css/Welcome.css';  //Import CSS styling    
//Welcome message
export default function Welcome() {
    let name = "Raphael";
    return(
        <div className="welcome-container">
            <h1 className="welcome">Hi {name}! 👋</h1>
        </div>
    );
}