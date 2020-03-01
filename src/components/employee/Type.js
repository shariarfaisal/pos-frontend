import React,{ useState } from 'react'
import axios from 'axios'


const Type = (props) => {
  const [name,setName] = useState('')
  const [error,setError] = useState(null)
  const [success,setSuccess] = useState(null)

  const submitHandler = async e => {
    e.preventDefault()
    if(name){
      try{
        const type = await axios.post('http://localhost:1000/api/employeeType/',{ name })
        if(type){
          setError('')
          setSuccess(`${type.data.name} type created!`)
          setName('')
        }
      }catch(err){
        setSuccess('')
        setError(err.response.data.msg)
      }
    }
  }

  return(
    <div className="col-md-6 light-border .employee-type--create">
      <form onSubmit={submitHandler}>
        {(error || success) && <p className={`text-center py-3 text-${success ? 'success' : 'danger'} m-0`}>{success ? success : error}</p>}
        <div className="form-group">
          <label htmlFor="name">Employee Type</label>
          <input
            onChange={e => setName(e.target.value)}
            type="text"
            className="form-control form-control-sm"
            placeholder="Type Name"
            value={name}
          />
        </div>
        <button type="submit" className="btn btn-sm btn-info px-4">Submit</button>
      </form>
    </div>
    )
}
export default Type
