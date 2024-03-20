import './css/reset.css';
import './css/general.css';
//Import components
import Navigation from "./Components/Navigation";
import Welcome from "./Components/Welcome";
import BrandsMenu from './Components/BrandsMenu';
import Sizes from './Components/Sizes';
import StyleGuru from './Components/StyleGuru';
import Filter from './Components/Filter';
import Sort from './Components/Sort';

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
      <Sort />
      <Filter />
    </div>
  );
}