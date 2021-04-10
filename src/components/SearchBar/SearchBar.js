import { Component } from 'react';
import { withRouter } from 'react-router-dom';

import "./SearchBar.css";

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
            this.props.history.push('/search/' + this.state.searchValue);
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

export default withRouter(SearchBar);
