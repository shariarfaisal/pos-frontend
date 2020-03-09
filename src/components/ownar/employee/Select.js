import React,{ memo } from 'react'

const Select = ({ name, type, setType }) =>{
 const items = ['----','rwud','rw--','rwu-','r---']
  return(
    <div className="form-group col-sm-6 col-md-4 col-lg-3">
      <label htmlFor={name} className="text-capitalize">{name}</label>
      <select disabled={type.name === 'admin' ? true : false} id={name} className="form-control form-control-sm" value={type.access[name]} onChange={e => setType({...type,access: {...type.access,[name]: e.target.value}})}>
        {items.map(i => <option key={i} value={i}>{i}</option>)}
      </select>
    </div>
  )
}

export default memo(Select)
