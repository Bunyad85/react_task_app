import React from 'react'
import Left from './Left'
import Right from './Right'

const HeroSection = () => {
    return (
        <div className='hero-wrapper'>
            <div className="hero">
                <Left />
                <Right />
            </div>
        </div>
    )
}

export default HeroSection