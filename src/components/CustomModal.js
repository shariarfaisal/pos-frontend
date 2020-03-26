import React from 'react'
import ModalFooter from './ModalFooter'
import { Modal } from 'react-bootstrap'


const CustomModal = ({ children, submitHandler, title, show, setShow, size }) => {
  return(
    <Modal
        show={show}
        onHide={e => setShow(false)}
        size={ size ? size : "md"}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <Modal.Body>
        <form onSubmit={submitHandler}>
          <h2 className="my-4 text-center h4">{title}</h2>
            {children}
          <ModalFooter show={show} setShow={setShow} />
        </form>
      </Modal.Body>
    </Modal>
  )
}
export default CustomModal
