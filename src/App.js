import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
    state = {
        mybooks: [],
    };

    componentDidMount(){
        BooksAPI.getAll().then((mybooks) => {
            this.setState({mybooks: mybooks});
        });
    };

    updateShelf = (book, shelf) => {
        book.shelf = shelf;
        BooksAPI.update(book, shelf).then(
            this.setState((prevState, props) => {
                    return {
                        mybooks: prevState.mybooks.map((b) => b.id === book.id ? book : b),
                    }
                }
            )
        )
    };

    addBook = (book, shelf) => {
        book.shelf = shelf;
        BooksAPI.update(book, shelf).then(
            this.setState(state => (
                    {mybooks: state.mybooks.concat([ book ])}
                )
            )
        )
    };

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <ListBooks mybooks={this.state.mybooks} updateShelf={this.updateShelf}/>
                )} />
                <Route exact path="/search" render={() => (
                    <SearchBooks mybooks={this.state.mybooks} updateShelf={this.addBook}/>
                )} />
            </div>
        )
    }
}

export default BooksApp;
