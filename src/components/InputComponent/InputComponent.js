import React from 'react'
import './InputComponent.css';

const InputComponent = ( props ) => {
    return (
        <div className='inputStyle'>
            <input 
                id='name_input'
                type='text' 
                placeholder='Search By Name'
                value = {props.value}
                onChange = {(event) => props.changeHandler(event)}
            />
        </div>
    )
}

export default InputComponent
