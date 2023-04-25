import React from 'react'

const InputForm = ({ type, placeholder }) => {
    return (
        <input type={type} placeholder={placeholder} className="form-control mt-1" />
    )
}

export default InputForm