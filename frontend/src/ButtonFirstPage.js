import React from 'react'
import './buttonFirstPage.css'


export const ButtonFirstpage = () => {
    
    const handleClick = (event) => {
        event.preventDefault()
        console.log("OnClick")
    }
    
    return(
     <button className="ButtonEnabled" onClick={handleClick}>Filter Customer</button>
     
    )
}