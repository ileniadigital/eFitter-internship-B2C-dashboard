import '../css/SearchBar.css'; //Import CSS styling

export default function SearchBar(){
    return (
        <div className="searchBar-container">
            <input type="text" id="search" placeholder="Search for an item..."></input>
            <button type="submit" id="searchButton">Search</button>
        </div>
    );
}