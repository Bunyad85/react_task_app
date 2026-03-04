import React from 'react'

const TextContent = ({ title, description, buttonTitle, buttonClassname }) => {
    return (
        <div className='text-content'>
            <h2>{title}</h2>
            <p>{description}</p>
            <button type='button' className={`card-button ${buttonClassname}`}>{buttonTitle}</button>
        </div>
    )
}

export default TextContent