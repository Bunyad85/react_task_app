import React from 'react'
import TextContent from './TextContent'

const Left = () => {
    return (
        <div className='left'>
            <img src="/BG.png" alt="car image" />
            <TextContent
                buttonTitle="Rental Car"
                title="The Best Platform for Car Rental"
                description="Ease of doing a car rental safely and reliably. Of course at a low price."
            />
        </div>
    )
}

export default Left