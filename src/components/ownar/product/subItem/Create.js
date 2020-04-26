import React,{ useState, useContext } from 'react'
import { SubItemLocalContext } from './SubItemLocalContext'
import { useParams } from 'react-router-dom'
import CustomModal from '../../../CustomModal'


const Create = ({ show, setShow }) => {
  const { itemId } =  useParams()
  const [name,setName] = useState('')
  const [code,setCode] = useState('')
  const [description,setDescription] = useState('')
  const image = 'image.jpg'

  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const { createSubItem } = useContext(SubItemLocalContext)

  const submitHandler = async e => {
    e.preventDefault()
    const get = await createSubItem({ name,  code, description, image, item: itemId })
    if(get.data){
      setSuccess("New item added!")
      setError('')
      setName('');setCode('');setDescription('');
    }
    if(get.error){
      setError(get.error.data)
      setSuccess('')
    }
  }

  return(
    <CustomModal
      title="Create New Sub Item"
      show={show}
      setShow={setShow}
      submitHandler={submitHandler}
    >
        {success && <div><p class="text-center text-success pb-3">{success}</p></div>}
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
            required={true}
          />
          {error.code && <small className="text-danger">{error.code}</small>}
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
          {error.description && <small className="text-danger">{error.description}</small>}
        </div>
    </CustomModal>
  )
}

export default Create
