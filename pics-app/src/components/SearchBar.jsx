import React, { Component } from 'react'

export default class SearchBar extends Component {

    // callback function
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    //Solution 1:
    // constructor(props) {
    //     super(props);

    //     this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // }

    state = {term: ''}

    onInputClick() {
        console.log('Input is clicked');
    }

    handleFormSubmit(event){
        // To prevent the default behavious of form submit which basically render the whole form
        event.preventDefault();
        // console.log(this.state.term); // Getting error because this is not bind with the function :::
        // Solution 1:
        console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    // Solution 1
    // handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }
    render() {
        return (
            <div className="ui segment">
                {/* Solution 1:*/}
                <form onSubmit={(event) => this.handleFormSubmit(event)} className="ui form">
                {/* <form onSubmit={this.handleFormSubmit} className="ui form"> */}
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
