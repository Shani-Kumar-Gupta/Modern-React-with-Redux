import React from 'react'
import SearchBar from './SearchBar'

class App extends React.Component {
    // Communicating child to parent: Invoke callbacks in children
    onSearchSubmit(term){
        console.log("data", term);
    }

    render(){
        return (
            <div className="ui container" style={{margin: '20px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App

