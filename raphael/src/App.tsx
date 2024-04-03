//Import styling
import './Components/general.css';
import './Components/reset.css';
import React, { useEffect, useState } from 'react';

//Import components
import Navigation from "./Components/navigation/navigation";
import Welcome from "./Components/welcome/welcome";
import DropDown from './Components/drop-down/drop-down';
import Sizes from './Components/sizes/sizes';
import StyleGuru from './Components/style-guru/style-guru';
import MaterialsGlossary from './Components/materials-glossary/materials-glossary';

//Import data
import { fetchRetailers } from './data/api';


// Main application
export default function App() {
  const [retailers, setRetailers] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');

  // Fetch retailers data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRetailers();
        setRetailers(data);
      } catch (error) {
        console.error('Error fetching retailers:', error);
      }
    };
    fetchData();
  }, []);

  const options = retailers.map((retailer) => retailer.name);

  // Handle brand selection
  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
  };

  return (
    <div className="App">
      <div className='navigation'>
        <Navigation />
      </div>
      <div className="content">
        <div className='welcome'>
          <Welcome />
        </div>
        <div className='dropdown'>
          <DropDown options={options} defaultOption={'Select a brand'} onSelect={handleBrandSelect} />
        </div>
        <div className='sizes'>
          <Sizes selectedBrand={selectedBrand} />
        </div>
        <div className='styleguru'>
          <StyleGuru />
        </div>
        <div className='materials-glossary'>
          <MaterialsGlossary />
        </div>
      </div>
    </div>
  );
}
