import React, {Component} from 'react'
import './Book.css'

class Book extends Component {

    render() {
        const {book} = this.props;
        let author = book.volumeInfo.authors;
        let title = book.volumeInfo.title;
        let thumbnail = book.volumeInfo.imageLinks.thumbnail;
        let previewLink = book.volumeInfo.previewLink;
        let snippet = book.searchInfo.textSnippet;
        let cost = book.saleInfo.saleability.listPrice.amount;

        return (
            <div className="book-container">
                <a href={previewLink} target="blank">
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