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
import { fetchRetailers } from './data/api';

export default function App() {
  // State to store the options
  const [retailers, setRetailers] = useState([]);

  // Fetch retailers data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRetailers();
        setRetailers(data);
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  const options = retailers.map((retailer) => (retailer.name));

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
