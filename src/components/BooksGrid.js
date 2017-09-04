import React, { Component } from 'react';
import Book from './Book';

class BooksGrid extends Component {

    render(){
        const { books, updateShelf } = this.props;
        return(
            <ol className="books-grid">
                {books.map(book => (
                    <Book key={book.id} book={book} updateShelf={updateShelf}/>
                ))};
            </ol>
        )
    }
}

export default BooksGrid;
