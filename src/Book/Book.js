import React, {Component} from 'react'
import './Book.css'

class Book extends Component {

    render() {
        const {book} = this.props;
        let author
        let title
        let thumbnail
        let previewLink
        let snippet
        let cost

        if (book.volumeInfo) {
            author = book.volumeInfo.authors !== undefined
                ?  book.volumeInfo.authors[0]
                : 'No authors listed'
            title = book.volumeInfo.title !== undefined
                ? book.volumeInfo.title
                : 'No authors listed'
            thumbnail = book.volumeInfo.imageLinks.thumbnail !== undefined
                ? book.volumeInfo.imageLinks.thumbnail
                : 'No image available'
            previewLink = book.volumeInfo.previewLink !== undefined
                ? book.volumeInfo.previewLink
                : 'https://books.google.com/'
        } else {
            author = null
            title = null
            thumbnail = null
            previewLink = null
            cost = null
        }

        if (book.searchInfo) {
            snippet = book.searchInfo.textSnippet !== undefined
            ? book.searchInfo.textSnippet
            : null;
        } else {
            snippet = null;
        }

        if (book.saleInfo) {
            cost = book.saleInfo.saleability === 'FOR_SALE'
            ? '$' + book.saleInfo.listPrice.amount
            : null
            console.log(cost)
        } else {
            cost = null
        }

        return (
            <div className="book-container">
                <a href={previewLink} target="blank" className="book-link">
                    <li className="book-list-item">
                        <img src={thumbnail} className="thumbnail" alt={`The cover of the book ${title}`}></img>
                        <div className="book-info">
                            <h2 className="book-title">{title}</h2>
                            <h3 className="book-author">{author}</h3>
                            <p className="book-cost">{cost}</p>
                            <p className="book-snippet">{snippet}</p>
                        </div>
                    </li>
                </a>
            </div>
        )
    }
}

export default Book