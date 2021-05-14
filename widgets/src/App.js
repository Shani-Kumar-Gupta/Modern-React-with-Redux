import React from 'react';
import Accordion from './components/Accordion';
import items from './helpers/index';
import Search from './components/Search';

const App = () => {
    return (
        <div className="ui container">
            <br />
            <Search />
            <br />
            <Accordion items={items} />
        </div>
    )
}

export default App;