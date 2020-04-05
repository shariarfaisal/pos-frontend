import React,{ useState } from 'react'
import axios from 'axios'

const CreateRequest = (props) => {
  const [title,setTitle] = useState('')
  const [message,setMessage] = useState('')
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')
  const [show,setShow] = useState(false)

  const submitHandler = async e => {
    e.preventDefault()
    try{
      const create = await axios.post('http://localhost:1000/api/exportRequest/',{ title, message })
      if(create){
        setError('')
        setTitle('')
        setMessage('')
        setSuccess('New Export Request Created!')
      }
    }catch(err){
      setSuccess('')
      console.log(err.response.data);
      setError(err.response.data)
    }
  }

  return(
    <div className="create-request">
      <button onClick={e => setShow(true)} type="button" className="btn btn-light text-dark rounded-circle">
        <i className="fa fa-plus text-success"></i>
      </button>
      {show && <div className="py-4 gray-border mt-3" id="createRequest">
        <p className="text-info text-center">Create New Request!</p>
        {success && <small className="text-center d-block text-success">{success}</small>}
        <form onSubmit={submitHandler} className="row">
          <div className="form-group col-lg-8">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="form-control"
              placeholder="Title"
            />
            {error && error.title && <small className="text-danger">*{error.title}</small>}
          </div>
          <div className="form-group col-lg-8">
            <label htmlFor="message">Message (optional)</label>
            <textarea id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="form-control"
              placeholder="Message"
            ></textarea>
            {error && error.message && <small className="text-info">{error.message}</small>}
          </div>
          <div className="col-12">
            <button disabled={title ? false : true} type="submit" className="btn btn-sm btn-success">Create</button>
            <button onClick={e => setShow(false)} type="button" className="btn btn-sm btn-gray mx-2">Cancel</button>
          </div>
        </form>
      </div>}
    </div>
  )
}

export default CreateRequest
