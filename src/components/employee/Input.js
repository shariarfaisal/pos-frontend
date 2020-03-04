import React,{ memo } from 'react'

const Input = ({ value, id, placeholder, type, set }) => {
  return (
    <div className="form-group col-md-6 my-2">
      <label htmlFor={id}>{placeholder}</label>
      <input
        className="form-control"
        value={value}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={e => set(e.target.value)}
        required
      />
    </div>
  )
}


export default React.memo(Input)
