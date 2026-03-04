import React from 'react'
import TextContent from './TextContent'

const Right = () => {
    return (
        <div className='right'>
            <img src="/bg2.png" alt="car image" />
            <TextContent
                buttonClassname="primary"
                buttonTitle="Rental Car"
                title="Easy way to rent a car at a low price"
                description="Providing cheap car rental services and safe and comfortable facilities."
            />
        </div>
    )
}

export default Right