import React from 'react'

const sharedFields = [
    { id: 'location', title: 'Locations', value: 'Select your city' },
    { id: 'date', title: 'Date', value: 'Select your date' },
    { id: 'time', title: 'Time', value: 'Select your time' }
]

const TextContent = ({ point, fields = sharedFields }) => {
    return (
        <div className='category-card'>
            <div className='point'>
                <span className='point-dot' />
                <span>{point}</span>
            </div>

            <div className='fields'>
                {fields.map((field) => (
                    <div className='field' key={field.id}>
                        <h4>{field.title}</h4>
                        <button type='button' className='field-button'>
                            {field.value}
                            <img src='/icon.svg' alt='dropdown icon' />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TextContent
