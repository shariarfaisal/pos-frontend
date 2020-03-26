import React,{ memo } from 'react'

const ItemInput = ({ id, type, plc, value, set}) => {
  return(
    <div className="col-md-6 col-lg-4 my-1 text-left">
      <label htmlFor={id}>{plc}</label>
      <input
        type={type}
        value={value}
        id={id}
        onChange={e => set(e.target.value)}
        placeholder={plc}
        className="form-control form-control-sm"
      />
    </div>
  )
}
export default memo(ItemInput)
