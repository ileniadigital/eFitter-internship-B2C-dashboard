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
import brandsData from './data/brands.json';

export default function App() {
  // State to store the options
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // Extract brand names from materialsData array
    const brandNames = brandsData.map(item => item.name);
    setOptions(brandNames);
  }, []);

  return (
    <div className="App">
      {/* Render navigation bar */}
      <div className='navigation'>
        <Navigation />
      </div>
      <div className="content">
        {/* Render welcome message */}
        <div className='welcome'>
          <Welcome />
        </div>

        {/* Render DropDown with fetched options */}
        <div className='dropdown'>
          <DropDown options={options} defaultOption={'Select a brand'} />
        </div>

        {/* Render size cards for each category */}
        <div className='sizes'>
          <Sizes />
        </div>

        {/* Style Guru */}
        <div className='styleguru'>
          <StyleGuru />
        </div>

        {/* Materials Glossary */}
        <div className='materials-glossary'>
          <MaterialsGlossary />
        </div>
      </div>
    </div>
  );
}
