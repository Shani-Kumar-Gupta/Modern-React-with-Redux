import React from 'react';
import '../css/SearchBar.css';

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();

        //TODO: Make sure we call
        // callback from parent component
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="video-search">Video Search</label>
                        <input 
                            type="text" 
                            placeholder="Enter your search term"
                            id="video-search"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;