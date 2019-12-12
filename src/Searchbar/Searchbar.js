import React, { Component } from 'react'
import './Searchbar.css'

class SearchBar extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            searchInput: ''
        }
    }

    handleSearchEvent = (searchEvent) => {
        this.setState({
            searchInput: searchEvent.target.value
        })
    }

    render() {
        const {searchInput} = this.state;        
        return (
            <form 
                className="searchbar-form"
                onSubmit={submitEvent => this.props.handleSearchSubmit(submitEvent, searchInput)}
            >
                <label htmlFor="search-term" className="searchbar-items">Search:</label>
                <input 
                    className="searchbar-items"
                    type="text"
                    name="search-term"
                    id="search-term"
                    onChange={this.handleSearchEvent}></input>
                <button 
                    className="searchbar-items"
                    type="submit" 
                    name="search-button" 
                    id="search-button"
                >Search
                </button>
            </form>
        );
    }
}

export default SearchBar