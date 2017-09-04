import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksGrid from './BooksGrid';
import * as BooksAPI from '../BooksAPI';

class SearchBooks extends Component {
    state = {
        booksFound : [],
        searchState : '',
        errorMessage: ''
    }

    changeQuery = (query) => {
        this.setState({ booksFound : [], searchState : 'noresults' });
        if(query) {
            this.setState({ searchState : 'searching' });
            BooksAPI.search(query, 20).then((data) => {
                let { mybooks } = this.props;

                if (data) {
                    if(!data.error){
                        const noDuplicatedData = data.filter((elem, pos, arr) => arr.findIndex((e) => e.id === elem.id) === pos);
                        const booksMerged = noDuplicatedData.map((cur, index) => (
                            mybooks.findIndex((ex) => ex.id === cur.id) === -1 ? cur : mybooks[mybooks.findIndex((ex) => ex.id === cur.id)]
                        ));
                        this.setState({ booksFound : booksMerged, searchState : 'results' });
                    } else {
                        this.setState({ searchState : 'error', errorMessage: data.error });
                    }
                } else {
                    this.setState({ searchState : 'noresults' });
                }
            });
        }
    };

    render(){
        const { updateShelf } = this.props;
        let { booksFound, searchState, errorMessage } = this.state;
        
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search"></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                               onChange={(event) => this.changeQuery(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    { searchState === 'error' &&
                    <div className="search-book-results-msg">Search error - {errorMessage}</div>}
                    { searchState === 'searching' &&
                    <div className="search-book-results-msg">Searching...</div>}
                    { searchState === 'noresults' &&
                    <div className="search-book-results-msg">No results found</div>}
                    { searchState === 'results' &&
                    <BooksGrid books={booksFound} updateShelf={updateShelf} />}
                </div>
            </div>
        )
    }
}

export default SearchBooks;
