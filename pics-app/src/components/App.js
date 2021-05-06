import React from 'react';
import unsplash from '../utils/axios/unsplash';
import SearchBar from './SearchBar';
import ImagesList from './ImagesList';

class App extends React.Component {

    state = { images: [] }
    // Communicating child to parent: Invoke callbacks in children
    onSearchSubmit = async (term) => {
        console.log("data", term);
        const responce = await unsplash.get('/search/photos', {
            params: {query: term},
            
        })
        this.setState({ images: responce.data.results })
    }

    render(){
        return (
            <div className="ui container" style={{margin: '20px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImagesList images={this.state.images}/>
            </div>
        )
    }
}

export default App

