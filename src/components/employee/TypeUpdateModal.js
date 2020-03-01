import React,{ useState } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'

const TypeUpdateModal = ({ id, name: nm, show, setShow }) => {
  const [name,setName] = useState(nm)
  const [error,setError] = useState(null)
  const [success,setSuccess] = useState(null)

  const submitHandler = async e => {
    e.preventDefault()
    if(name){
      try{
        const updated = await axios.put(`http://localhost:1000/api/employeeType/${id}`,{ name })
        if(updated){
          setError('')
          setSuccess('Data Updated!')
        }
      }catch(err){
        setSuccess('')
        setError(err.response.data.msg)
      }
    }
  }

  return(
    <Modal
        show={show}
        onHide={e => setShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Body>
          <div>
            <h4 className="text-center text-info mb-4">Update</h4>
            <form onSubmit={submitHandler}>
              {(error || success) && <p className={`text-center py-3 text-${success ? 'success' : 'danger'} m-0`}>{success ? success : error}</p>}
              <div className="form-group">
                <input
                  onChange={e => setName(e.target.value)}
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Type Name"
                  value={name}
                />
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-sm btn-info px-4 mx-2">Submit</button>
                <button onClick={e => setShow(false)} type="button" className="btn btn-sm btn-danger mx-2 px-4">Close</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    )
}
export default TypeUpdateModal
