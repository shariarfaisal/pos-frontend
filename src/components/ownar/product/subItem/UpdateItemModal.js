import React,{ useState } from 'react'
import CustomModal from '../../../CustomModal'


const UpdateItemModal = ({ _id, image, code, show, setShow, name: nme, description: dcp, getUpdateItem }) => {
  const [name, setName] = useState(nme)
  const [description,setDescription] = useState(dcp)
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    const get = await getUpdateItem(_id,{ name, description, image, code })
    if(get.data){
      setSuccess("Updated!")
    }
    if(get.error){
      setError(get.error.data)
    }
  }

  return(
    <CustomModal
      show={show}
      setShow={setShow}
      title="Update Item"
      submitHandler={submitHandler}
      size="md"
    >
    {success && <div><p className="text-center text-success pb-3">{success}</p></div>}
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
export default UpdateItemModal
