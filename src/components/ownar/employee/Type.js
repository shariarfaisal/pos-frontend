import React,{ useEffect, useState, useContext } from 'react'
import { EmployeeTypeContext } from '../../../store/EmployeeTypeContext'
import { useParams } from 'react-router-dom'
import Select from './Select'
import MsgBox from '../../MsgBox'

const accessToText = (arg) => {
  return ['----','rwud','rw--','rwu-','r---'].find(i => i === arg)
}

const Type = (props) => {
  const { typeId } = useParams()
  const [type,setType] = useState({})
  const [error,setError] = useState(null)
  const [success,setSuccess] = useState(null)
  const context = useContext(EmployeeTypeContext)

  useEffect(() => {
    context.getType(typeId,setType)
  },[])

  const submitHandler = async e => {
    e.preventDefault()
    if(type && type.name !== 'admin'){
      const res = await context.getUpdate(typeId,{ name: type.name, access: type.access })
      if(res.success){
        setSuccess(res.success)
        setError('')
      }else{ setSuccess('');setError(res.error);}
    }
  }


  return(
    <div className="col-md-10 light-border">
      <h4>{type.name}</h4>
      <MsgBox error={error} success={success} />
      <form onSubmit={submitHandler} className="my-4 row">
        <div className="form-group col-md-6">
          <label htmlFor="name">Name</label>
          <input
            onChange={e => setType({...type,name: e.target.value})}
            id="name"
            type="text"
            className="form-control form-control-sm"
            placeholder="Type Name"
            value={type.name}
            disabled={type.name === 'admin' ? true : false}
          />
        </div>
        {type.access && Object.keys(type.access).map((t,i) => {
          return <Select key={i} name={t} type={type} setType={setType}/>
        })}
        <div  className="col-12"><button disabled={type.name === 'admin' ? true : false} type="submit" className={`btn btn-info px-4 my-2`}>Update</button></div>
      </form>
    </div>
  )
}
export default Type
