import React from 'react';
import BooksGrid from'./bookGrid'

class BookShelf extends React.Component {
        render() {
            return (
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <BooksGrid/>
                    </div>
                </div>
            )
        }
}

export default BookShelf