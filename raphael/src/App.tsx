import './Components/general.css';
import './Components/reset.css';
//Import components
import Navigation from "./Components/navigation/navigation";
import Welcome from "./Components/welcome/welcome";
import BrandsMenu from './Components/drop-down/brands-menu';
import Sizes from './Components/sizes/sizes';
import StyleGuru from './Components/style-guru/style-guru';
import MaterialsGlossary from './Components/materials-glossary/materials-glossary';

export default function App() {
  return (
    <div className="App">
      {/* Render navigation bar */}
      <Navigation />
      {/* Render welcome message */}
      <Welcome />
      {/* Render dropdown menu with brands */}
      <BrandsMenu />
      {/* Render size cards for each category */}
      <Sizes />
      {/* Style Guru */}
      <StyleGuru />
      {/* Materials Glossary */}
      <MaterialsGlossary />
    </div>
  );
}