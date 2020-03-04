import React,{ useState, useReducer, useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { EmployeeTypeContext } from '../../store/EmployeeTypeContext'
import MsgBox from '../MsgBox'


const TypeUpdateModal = ({ id, name: nm, show, setShow }) => {
  const [name,setName] = useState(nm)
  const [error,setError] = useState(null)
  const [success,setSuccess] = useState(null)
  const context = useContext(EmployeeTypeContext)

  const submitHandler = async e => {
    e.preventDefault()
    if(name){
      const res = await context.getUpdate(id,{ name })
      if(res.success){
        context.setReload(true)
        setSuccess(res.success)
        setError('')
      }else{ setSuccess('');setError(res.error);}
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
              <MsgBox error={error} success={success} />
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
                <button type="submit" className="btn btn-sm btn-light text-info px-4 mx-2">Submit</button>
                <button onClick={e => setShow(false)} type="button" className="btn btn-sm btn-light text-danger mx-2 px-4">Close</button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    )
}
export default TypeUpdateModal
