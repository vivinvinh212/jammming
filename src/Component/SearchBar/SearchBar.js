import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.search = this.search.bind(this)
        this.handleTermChange = this.handleTermChange.bind(this)
    }
    search(term) {
        this.props.onSearch(this.state.term);
    }
    handleTermChange(e) {
        this.setState(e.target.value)
    }
    render() {
        return (
            <div class="SearchBar">
                <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
                <button class="SearchButton">SEARCH</button>
            </div>

        )
    }
}
export default SearchBar;