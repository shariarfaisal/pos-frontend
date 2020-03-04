import React,{ useState, useContext } from 'react'
import ModalFooter from '../ModalFooter'
import { Modal } from 'react-bootstrap'
import { EmployeeTypeContext } from '../../store/EmployeeTypeContext'
import MsgBox from '../MsgBox'


const TypeCreate = ({ show, setShow }) => {
  const [name,setName] = useState('')
  const [error,setError] = useState(null)
  const [success,setSuccess] = useState(null)
  const context = useContext(EmployeeTypeContext)

  const submitHandler = async e => {
    e.preventDefault()
    if(name){
      const type = await context.getPost({ name })
      if(type.success){
        context.setEmployeeTypes([...context.employeeTypes,type.data.data])
        setError('')
        setSuccess(`${type.data.data.name} type created!`)
        setName('')
      }
      if(type.error){
        setSuccess('')
        setError(type.error)
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
      <form onSubmit={submitHandler}>
        <MsgBox error={error} success={success}/>
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
        <ModalFooter show={show} setShow={setShow} />
      </form>
      </Modal.Body>
    </Modal>
    )
}
export default TypeCreate
