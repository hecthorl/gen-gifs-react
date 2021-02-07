import React from 'react'

export const GifGridItem = ({title, img}) => {
    
    return (
        <div className="card animate__animated animate__fadeInLeftBig">
            <img src = {img} alt={title} />
            <p>{title}</p>
        </div>
    )
}
