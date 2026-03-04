import React from 'react'
import Left from './Left'
import Right from './Right'

const Categories = () => {
    return (
        <div className='categories-section'>
            <div className="categories">
                <Left />
                <button type='button' className='swap-icon'>
                    <img src='/Swap.svg' alt='swap' />
                </button>
                <Right />
            </div>
        </div>
    )
}

export default Categories
