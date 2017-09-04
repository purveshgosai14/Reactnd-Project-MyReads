import React, { Component } from 'react';
import Book from './Book';

class BooksGrid extends Component {

    render(){
        const { books, updateShelf } = this.props;
        return(
            /* Display books only when query is not empty*/
            <ol className="books-grid">
                {books.map(book => (
                    <Book key={book.id} book={book} updateShelf={updateShelf}/>
                ))};
            </ol>
        )
    }
}

export default BooksGrid;
