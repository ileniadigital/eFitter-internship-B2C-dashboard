import logo from '../image/eFitter_burgundy_wordmark.png'; //Import logo
import '../css/Navigation.css'; //Import CSS styling

// Navigation Bar component
export default function Navigation() {
    return (
        <div className="navigation-container">
            <nav className="navigation">
                {/* wordmark logo */}
                <div className="logo-container" >
                    <img src={logo.src} alt="eFitter logo" className='logo' />
                </div>
            </nav>
        </div>
    );
}