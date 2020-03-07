import React,{ useState, useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { EmployeeTypeContext } from '../../../store/EmployeeTypeContext'
import MsgBox from '../../MsgBox'

const TypeDeleteModal = ({ id, show, setShow }) => {
  const [msg,setMsg] = useState('')
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')
  const context = useContext(EmployeeTypeContext)

  const getDeleteByID = async (id) => {
    const { success, error } = await context.getDelete(id)
    if(success){
      context.setReload(true)
      setMsg(success)
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
            <MsgBox error={error} success={success} />
            <p className="text-center text-muted">Are you sure you want to delete this type!</p>
            <MsgBox error={error} success={success} />
            <div className="d-flex justify-content-end">
              <button onClick={e => setShow(false)} type="button" className="btn btn-light text-danger mx-2 px-2 btn-sm">Cansel</button>
              <button onClick={e => getDeleteByID(id)} type="button" className="btn btn-light text-primary px-3 mx-2 btn-sm">Ok</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
  )
}
export default TypeDeleteModal
