import React, { Component } from 'react';
import './App.css';
import Searchbar from './Searchbar/Searchbar'
import Filter from './Filter/Filter';
import BookList from './BookList/BookList'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
      printType: '',
      bookType: ''
    }
  }

  handlePrintType = (printTypeFormEvent) => {
    if ( printTypeFormEvent ) {
      this.setState({
        printType: printTypeFormEvent
      })
    }
  }

  handleBookType = (bookTypeFormEvent) => {
    if (bookTypeFormEvent) {
      this.setState({
        bookType: bookTypeFormEvent
      })
    }
  }

  handleSearchSubmit = (submitEvent, searchInput) => {
    submitEvent.preventDefault();
    this.setState({
      searchQuery: searchInput
    })
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes'
    const key = 'AIzaSyDRu4NermddiVermh80qm1ObrZoPuDKfWY'

    const formattedUrl = this.formatQueryParams(baseUrl, searchInput, key)
    console.log(formattedUrl)

    fetch(formattedUrl)
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong, please try again later')
      }
      return response
    })
    .then(response => response.json())
    .then(responseJson => {
      console.log('Response ok: ', responseJson)
      this.setState({
        bookResults: responseJson,
        error: null
      })
    })
    .catch(error => {
      this.setState({
        error: error.message
      })
    })
  }

  formatQueryParams = (baseUrl, searchInput, key) => {
  let query;
  if (searchInput !== '') {
    query = '?q=' + searchInput
  }
    const url = baseUrl + query + '&key=' + key
    console.log(url)
    return url
  }

  render() {
    const {bookResults} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <main>
            <Searchbar 
              handleSearchSubmit={this.handleSearchSubmit}
            />
            <Filter 
              handlePrintType={this.handlePrintType}
              handleBookType={this.handleBookType}
            />
            <BookList 
              bookResults={bookResults}
            />
        </main>
      </div>
    );
  }
}

export default App;
