import React from 'react'

export const GifGridItem = ( {title, url} ) => {

    console.log( title, url);
    return (
        <div>
            <div className="card animate__animated animate__bounce">
                <img src = { url } alt = {title}></img>
                <p> { title } </p>
            </div>
        </div>
    )
}
