import React, {Component} from 'react'
import './BookList.css'
import Book from '../Book/Book'

class BookList extends Component {
    render() {
        const {bookResults} = this.props
        console.log(bookResults)
        const booklist = bookResults.items.map((book, index) => 
            <Book book={book} key={index} />)
        return (
            <section className="booklist-container">
                <ul>
                    {booklist}
                </ul>
            </section>
        )
    }
}

export default BookList