import React, { Component } from 'react'

export default class SearchBar extends Component {

    // callback function
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    state = {term: ''}

    onInputClick() {
        console.log('Input is clicked');
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text"
                            onClick={this.onInputClick} 
                            value={this.state.term}
                            // onChange={this.onInputChange} />
                            onChange={(e) => this.setState({term: e.target.value})} />
                    </div>
                </form>
            </div>
        )
    }
}
