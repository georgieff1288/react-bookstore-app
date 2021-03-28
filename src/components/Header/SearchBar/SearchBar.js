import { Component } from 'react';

import "./SearchBar.css"

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);          
    };

    handleChange (e) {
        this.setState({searchValue: e.target.value});
    };

    handleSearch (e) {
        e.preventDefault();

        if(this.state.searchValue) {
            console.log(e.target.search.value); 
        };       
    };

    render(){
        return(
            <form onSubmit={this.handleSearch}>
            <input className="searchBar" type="text" name="search" id="search" value={this.state.searchValue} onChange={this.handleChange} placeholder="Search books" />
            <input type="submit" value="Search" className="searchButton" />
            </form>
        );
    };
};




// import { useState } from 'react';

// import "./SearchBar.css"

// const SearchBar = () => {
//     const [searchValue, setSearchText] = useState('');

//     const onChange = (e) => {
//         setSearchText(e.target.value);
//     };

//     const search = (e) => {
//         e.preventDefault();

//         if(searchValue) {
//             console.log(e.target.search.value); 
//         };       
//     };

//     return(
//         <form onSubmit={search}>
//             <input className="searchBar" type="text" name="search" id="search" onChange={onChange} placeholder="Search books" />
//             <input type="submit" value="Search" className="searchButton" />
//         </form>
//     );
// };

export default SearchBar;