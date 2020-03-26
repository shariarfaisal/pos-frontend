import React,{ memo } from 'react'

const InputSection = ({className, title, id, children}) => (
  <div className={`form-group my-2 ${className}`}>
    <label htmlFor={id}>{title}</label>
    {children}
  </div>
)

export default memo(InputSection)
