import React from 'react'

const SearchBar = ({search, setSearch, searchArray}) => {
    return (
        <div className="search-container">
            <span>
                <button type="submit" onClick={() => searchArray()}>Search</button>
            </span>
            <input
                type="text"
                className="search-bar"
                value={search}
                placeholder="search..."
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        
    )
}

export default SearchBar
