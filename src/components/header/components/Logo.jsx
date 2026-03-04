import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className='logo-wrapper'>
            <Link className='logo' to="/">
                <img src="/Logo.svg" alt="Morent" title='Morent' />
            </Link>
        </div>
    )
}

export default Logo