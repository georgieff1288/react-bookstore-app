import "./SearchBar.css"

const SearchBar = () => {
    const search = (e) => {
        e.preventDefault();
        console.log(e.target.search.value);
    };

    return(
        <form onSubmit={search}>
            <input className="searchBar" type="text" name="search" id="search" placeholder="Search books" />
            <input type="submit" value="Search" className="searchButton" />
        </form>
    );
};

export default SearchBar;

