import React from 'react';
import Book from './book'

class BooksGrid extends React.Component {
    render() {
        return (
<ol className="books-grid">
    <li>
        <Book/>
    </li>
</ol>
        )
    }
}

export default BooksGrid