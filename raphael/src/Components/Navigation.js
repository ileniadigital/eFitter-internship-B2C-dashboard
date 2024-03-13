import '../css/Navigation.css'; //Import CSS styling

// Navigation Bar component
export default function Navigation() {
    return (
        <div className="navigation-container">
            <nav className="navigation">
                {/* wordmark logo */}
                <div className="logo-container" >
                    <img src={require("../image/eFitter_wordmark.png")} alt="eFitter logo" className='logo' />
                </div>
            </nav>
        </div>
    );
}