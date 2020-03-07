import React,{ useState, useContext } from 'react'
import { CategoryContext } from '../../../store/CategoryContext'
import ModalFooter from '../../ModalFooter'
import { Modal } from 'react-bootstrap'
import MsgBox from '../../MsgBox'

const Create = ({ show, setShow }) => {
  const [name,setName] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const context = useContext(CategoryContext)

  const submitHandler = async e => {
    e.preventDefault()
    if(name){
      const category = await context.getPost({ name })
      if(category.success){
        setSuccess(category.success)
        context.setCategories([...context.categories,category.data.data])
        setName('')
      }else{
        setError(category.error)
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
          <h2 className="my-4 text-center h4">Create New Category</h2>
          <MsgBox error={error} success={success} />
          <div className="form-group">
            <label htmlFor="name">Category Name</label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Category"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <ModalFooter show={show} setShow={setShow} />
        </form>
      </Modal.Body>
    </Modal>
  )
}


export default Create
