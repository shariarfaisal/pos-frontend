import React,{ useState, useContext } from 'react'
import { BrandLocalContext } from './BrandLocalContext'
import { Modal } from 'react-bootstrap'
import ModalFooter from '../../ModalFooter'


const Create = ({ show, setShow }) => {
  const [name,setName] = useState('')
  const [code,setCode] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const { createBrand } = useContext(BrandLocalContext)

  const submitHandler = async e => {
    e.preventDefault()
    const get = await createBrand({ name, code })
    if(get.data){
      setError('')
      setSuccess("New item added!");
      setName('');setCode('')
    }
    if(get.error){
      setSuccess('')
      setError(get.error.data)
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
          <h2 className="my-4 text-center h4">Create New Brand</h2>
          {success && <div><p className="text-center text-success">{success}</p></div>}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="form-control form-control-sm"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            {error.name && <small className="text-danger">{error.name}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="code">Code</label>
            <input
              id="code"
              type="text"
              className="form-control form-control-sm"
              placeholder="Code"
              value={code}
              onChange={e => setCode(e.target.value)}
            />
            {error.code && <small className="text-danger">{error.code}</small>}
          </div>
          <ModalFooter show={show} setShow={setShow} />
        </form>
      </Modal.Body>
    </Modal>
  )
}


export default Create
