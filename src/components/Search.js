import React, {Component} from 'react';

class Search extends Component {

    /**
     * @description wrap our main API call func
     */

    handleSelectChange = (e) => {
        e.preventDefault();
        console.log("curent", this.props);
        if (this.props.updateShelf) {
            this.props.updateShelf(this.props.book, e.target.value)
        }
    };
    render() {
        const {book} = this.props;
        const shelf = [
            {text: 'Currently Reading', value: 'currentlyReading'},
            {text: 'Want to Read', value: 'wantToRead'},
            {text: 'Read', value: 'read'},
            {text: 'None', value: 'none'},
        ];
        return (
            <div className={`book-shelf-changer book-shelf-changer-${book.shelf}`}>
                <select defaultValue={book.shelf !== undefined ? book.shelf : ""} onChange={this.handleSelectChange}>
                    <option value="" disabled>Move to...</option>
                    {shelf.map((shelf) => (
                        <option key={shelf.value} value={shelf.value}>{shelf.text}</option>
                    ))}
                </select>
            </div>
        )
    }
}

export default Search;
