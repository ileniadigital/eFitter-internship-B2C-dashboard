import './Components/general.css';
import './Components/reset.css';
//Import components
import Navigation from "./Components/navigation/navigation";
import Welcome from "./Components/welcome/welcome";
import DropDown from './Components/drop-down/drop-down';
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
      <DropDown options={['Zara', 'H&M']} defaultOption={'Select a brand'} />
      {/* Render size cards for each category */}
      <Sizes />
      {/* Style Guru */}
      <StyleGuru />
      {/* Materials Glossary */}
      <MaterialsGlossary />
    </div>
  );
}