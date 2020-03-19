import React, { useState } from 'react'
import './filter.css'


export const Filter = () => {
    const [ company, setCompany] = useState()
    const [ event, setEvent ] = useState()

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     setShowResult(true)

    return (

        <div className="dropdwonMenu">
        <select className="dropdown" onChange={event => setCompany(event.target.value)}
          value={company}>
          
            <option value="">Company</option>
            <option value="Company NR1">Company1</option>
            <option value="Company NR2">Company2</option>
            <option value="Company NR3">Company3</option>
        </select>
        </div>

        // <div className="dropdwon-menu">
        // <select className="dropdown" onChange={event => setEvent(event.target.value)}
        // value={event}>
            
        //     <option value="">Event</option>
        //     <option value="Agent">Agent</option>
        //     <option value="Google">Google</option>
        //     <option value="Wavenet">Wavenet</option>
        // </select>
        // </div>
    )
}

export default Filter;