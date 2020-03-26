import React,{ memo } from 'react'

const Input = ({ value, setValue, title, id, type, ref }) => (
  <div className="form-group col-md-8 col-lg-6 my-1">
    <label htmlFor={id}>{title}</label>
    <input
      type={type}
      className="form-control form-control-sm"
      placeholder={title}
      id={id}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  </div>
)


export default memo(Input)
