import React,{ useState, useContext } from 'react'
import { BrandContext } from '../../store/BrandContext'
import { Modal } from 'react-bootstrap'
import ModalFooter from '../ModalFooter'
import MsgBox from '../MsgBox'


const Create = ({ show, setShow }) => {
  const [name,setName] = useState('')
  const [code,setCode] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const context = useContext(BrandContext)

  const submitHandler = async e => {
    e.preventDefault()
    if(name && code){
      const brand = await context.getPost({ name, code })
      if(brand.success){
        setSuccess(brand.success)
        context.setBrands([...context.brands,brand.data.data])
        setName('');
        setCode('')
      }else{
        setError(brand.error)
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
          <h2 className="my-4 text-center h4">Create New Brand</h2>
          <MsgBox error={error} success={success} />
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
          </div>
          <ModalFooter show={show} setShow={setShow} />
        </form>
      </Modal.Body>
    </Modal>
  )
}


export default Create
