import React, { Component } from 'react';
import Search from './Search';

class Book extends Component {

    render(){
    const { book, updateShelf } = this.props;

    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                         style={{ width: 128, height: 193,
                             backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : ""
                         }}>
                    </div>
                    <Search book={book} updateShelf={updateShelf}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(", ") : ""}</div>
            </div>
        </li>
         )
    }
}

export default Book;
