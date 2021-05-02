import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    // Communicating child to parent: Invoke callbacks in children
    async onSearchSubmit(term){
        console.log("data", term);
        const responce = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID PnGDzIXbzPvJS-LuM8XRwVr1YwPVgTb1O4Oj-stzkuU'
            }
        })
        console.log(responce.data.results);
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

