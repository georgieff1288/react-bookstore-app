import "./SearchBar.css"

const SearchBar = () =>{
    return(
        <div>
            <input className="searchBar" type="text" placeholder="Search books"></input>
            <input type="submit" value="Search" className="searchButton"></input>
        </div>
    );
};

export default SearchBar;

