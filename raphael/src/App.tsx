import './Components/general.css';
import './Components/reset.css';
import Navigation from "./Components/navigation/navigation";
import Welcome from "./Components/welcome/welcome";
import DropDown from './Components/drop-down/drop-down';
import Sizes from './Components/sizes/sizes';
import StyleGuru from './Components/style-guru/style-guru';
import MaterialsGlossary from './Components/materials-glossary/materials-glossary';
import { useEffect, useState } from 'react';

// Import data
import materialsData from './data/brands.json';

export default function App() {
  // State to store the options
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Extract brand names from materialsData array
    const brandNames = materialsData.map(item => item.name);
    setOptions(brandNames);
  }, []);

  return (
    <div className="App">
      {/* Render navigation bar */}
      <Navigation />
      {/* Render welcome message */}
      <Welcome />
      {/* Render DropDown with fetched options */}
      <DropDown options={options} defaultOption={'Select a brand'} />
      {/* Render size cards for each category */}
      <Sizes />
      {/* Style Guru */}
      <StyleGuru />
      {/* Materials Glossary */}
      <MaterialsGlossary />
    </div>
  );
}
