import React,{ useState, useEffect, useContext } from 'react'
import { EmployeeTypeContext } from '../../../store/EmployeeTypeContext'
import { EmployeeContext } from '../../../store/EmployeeContext'
import MsgBox from '../../MsgBox'
import axios from 'axios'
import Input from './Input'

const Create = (props) => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [username,setUsername] = useState('')
  const [phone,setPhone] = useState('')
  const [type,setType] = useState('')
  const [password,setPassword] = useState('')
  const [confirm,setConfirm] = useState('')
  const [types,setTypes] = useState([])
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const context = useContext(EmployeeContext)
  const typeContext = useContext(EmployeeTypeContext)

  const submitHandler = async e => {
    e.preventDefault()
    if(name && email && username && type && phone &&  password && confirm){
      if(password !== confirm){
        setError({confirm: 'Password & Confirm Password does not match!'})
      }else{
        const employee = await context.getPost({ name, email, username, phone, type, password })
        if(employee.success){
          setError('')
          setSuccess(employee.success)
          setName('');
          setEmail('');
          setPhone('');
          setType('');
          setPassword('');
          setConfirm('');
        }else{
          setSuccess('')
          setError(employee.error)
        }
      }
    }
  }


  return(
    <div className="col-md-10 col-lg-8 employee-create--form bg-light">
      <MsgBox error={error} success={success}/>
      <form onSubmit={submitHandler}>
        <div className="row py-3">
          <Input
            id="name"
            value={name}
            set={setName}
            type="text"
            placeholder="Name"
          />
          <Input
            id="email"
            value={email}
            set={setEmail}
            type="email"
            placeholder="Email"
          />
          <Input
            id="username"
            value={username}
            set={setUsername}
            type="text"
            placeholder="Username"
          />
          <Input
            id="phone"
            value={phone}
            set={setPhone}
            type="text"
            placeholder="Phone"
          />
          <div className="form-group col-md-6 my-2">
            <label htmlFor="employeeType">Employee Type</label>
            <select id="employeeType" className="form-control" onChange={e => setType(e.target.value)} value={type}>
              <option value="">Select One</option>
              {typeContext && typeContext.employeeTypes.map((item,index) => {
                return <option key={index} value={item._id}>{item.name}</option>
              })}
            </select>
          </div>
          <Input
            id="password"
            value={password}
            set={setPassword}
            type="password"
            placeholder="Password"
          />
          <Input
            id="confirmPassword"
            value={confirm}
            set={setConfirm}
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <button type="submit" className="btn btn-sm px-4 btn-info" name="button">Submit</button>
      </form>
    </div>
    )
}


export default Create
