import React from 'react'
import './Input.css'

const Input = ({onSubmit, defaultValue, name, onChange, title, placeholder}) => {
    return ( 
        //this part will grab the event target
        <form  onSubmit={(e)=>onSubmit(e)}>
            <input placeholder={placeholder} value={defaultValue} name={name} onChange={(e)=>onChange(e)}/>
            <button>{title}</button>
        </form>
    )
} 

export default Input