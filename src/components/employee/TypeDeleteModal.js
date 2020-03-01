import React,{ useState } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'

const TypeDeleteModal = ({ id, show, setShow }) => {
  const [msg,setMsg] = useState('')

  const getDelete = async (id) => {
    try{
      const deleted = await axios.delete(`http://localhost:1000/api/employeeType/${id}`)
      if(deleted){
        setMsg('Successfully deleted!')
      }
    }catch(err){
      console.log(err.response.data.msg);
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
            {!msg && <p className="text-center text-muted">Are you sure you want to delete this type!</p>}
            {msg && <p className="text-center text-success">{msg}</p>}
            <div className="d-flex justify-content-end">
              <button onClick={e => setShow(false)} type="button" className="btn btn-sm btn-info mx-2 px-2">Cansel</button>
              <button onClick={e => getDelete(id)} type="button" className="btn btn-sm btn-light px-2 mx-2 border">Ok</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
}
export default TypeDeleteModal
