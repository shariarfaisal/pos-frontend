import React,{ useState, useContext } from 'react'
import { ProductSubItemContext } from '../../../store/ProductSubItemContext'
import MsgBox from '../../MsgBox'
import { useParams } from 'react-router-dom'
import CustomModal from '../../CustomModal'


const Create = ({ show, setShow }) => {
  const { itemId } =  useParams()
  const [name,setName] = useState('')
  const [code,setCode] = useState('')
  const [description,setDescription] = useState('')
  const image = 'image.jpg'

  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const context = useContext(ProductSubItemContext)

  const submitHandler = async e => {
    e.preventDefault()
    if(name && code && description && itemId && image){
      const items = await context.getPost({ name,  code, description, image, item: itemId })
      if(items.success){
        setError('')
        setSuccess(items.success)
        context.setSubItems([...context.subItems,items.data.data])
        setName('')
        setCode('')
        setDescription('')
      }else{
        setSuccess('')
        setError(items.error)
      }
    }
  }

  return(
    <CustomModal
      title="Create New Sub Item"
      show={show}
      setShow={setShow}
      submitHandler={submitHandler}
    >
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
            required={true}
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
            required={true}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            cols="30"
            rows="5"
            value={description}
            required={true}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description">
          </textarea>
        </div>
    </CustomModal>
  )
}

export default Create
