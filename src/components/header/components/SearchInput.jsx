import React from 'react'

const SearchInput = ({ searchTerm, onSearchChange, onFilterToggle }) => {
    const handleChange = (event) => {
        onSearchChange(event.target.value)
    }

    return (
        <div className='search-input'>
            <div className='search-box'>
                <img className='search-icon' src="/search-normal.svg" alt="search-icon" />

                <input
                    type="text"
                    placeholder='Search car name'
                    value={searchTerm}
                    onChange={handleChange}
                />
            </div>

            <button type='button' className='search-filter-button' onClick={onFilterToggle}>
                <img src="/filter.svg" alt="filter-icon" />
            </button>
        </div>
    )
}

export default SearchInput
