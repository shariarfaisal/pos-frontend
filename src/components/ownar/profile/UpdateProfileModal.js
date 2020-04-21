import React from 'react'
import { Modal } from 'react-bootstrap'


const UpdateProfileModal = ({ children, submitHandler, title, show, setShow, size }) => {
  return(
    <Modal
        show={show}
        onHide={e => setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Body>
        <form onSubmit={submitHandler}>
          <h2 className="my-4 text-center h4">{title}</h2>
            {children}
        </form>
      </Modal.Body>
    </Modal>
  )
}
export default UpdateProfileModal
