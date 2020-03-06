import React from 'react'

const Input = ({ value, set, id, title, type }) => {
  return(
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        id={id}
        className="form-control form-control-sm"
        placeholder={title}
        value={value}
        onChange={e => set(e.target.value)}
        required={true}
      />
    </div>
  )
}

export default Input
