import React, { useState } from 'react'

const Search = () => {
    const [term, setTerm] = useState('');
    return (
        <>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="term">Enter Search Term</label>
                    <input 
                        className="input" 
                        type="text" 
                        id="term"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
};

export default Search;
