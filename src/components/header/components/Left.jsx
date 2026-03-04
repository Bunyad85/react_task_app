import React from 'react'
import Logo from "../components/Logo";
import SearchInput from './SearchInput';

const Left = ({ searchTerm, onSearchChange, onFilterToggle }) => {
    return (
        <div className='header-left-side'>
            <Logo />
            <SearchInput
                searchTerm={searchTerm}
                onSearchChange={onSearchChange}
                onFilterToggle={onFilterToggle}
            />
        </div>
    )
}

export default Left
