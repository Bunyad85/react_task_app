import React from 'react'
import "./style.scss";
import Left from "./components/Left";
import Right from "../header/rightcomponent/Right";

const Header = ({ favoriteCars, searchTerm, onSearchChange, onFilterToggle }) => {
    return (
        <div className='header-wrapper'>
            <div className="header">
                <Left
                    searchTerm={searchTerm}
                    onSearchChange={onSearchChange}
                    onFilterToggle={onFilterToggle}
                />
                <Right favoriteCars={favoriteCars} />
            </div>
        </div>
    )
}

export default Header
