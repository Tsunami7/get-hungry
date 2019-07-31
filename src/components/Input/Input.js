import React from 'react'

const Input = ({onSubmit, defaultValue, name, onChange, title, placeholder}) => {
    return ( 
        //this part will grab the event target
        <form onChange={(e)=>onChange(e)} onSubmit={(e)=>onSubmit(e)}>
            <input placeholder={placeholder} defaultValue={defaultValue} name={name}/>
            <button>{title}</button>
        </form>
    )
} 

export default Input