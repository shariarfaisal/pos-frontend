import React,{ useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import CustomModal from '../../../CustomModal'
import { ItemLocalContext } from './ItemLocalContext'


const Create = ({ show, setShow, match, brands }) => {
  const [name,setName] = useState('')
  const [code,setCode] = useState('')
  const [brand,setBrand] = useState('')
  const [description,setDescription] = useState('')
  const image = 'image.jpg'
  const product = match.params.proId
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const { createItem } = useContext(ItemLocalContext)


  const submitHandler = async e => {
    e.preventDefault()
    const get = await createItem({ name,  code, description, image, product, brand })
    if(get.data){
      setSuccess("New item created!")
      setName('');setCode('');setDescription('');
      setError('')
    }
    if(get.error) setError(get.error.data)
  }

  return(
    <CustomModal
      title="Create New Item"
      show={show}
      setShow={setShow}
      submitHandler={submitHandler}
    >
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
          <label htmlFor="brand">Brand</label>
          <select className="form-control form-control-sm" value={brand} onChange={e => setBrand(e.target.value)}>
            <option>Select Brand</option>
            {Object.keys(brands).map((id,i) => {
              return <option key={i} value={id}>{brands[id].name}</option>
            })}
          </select>
          {error.brand && <small className="text-danger">{error.brand}</small>}
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

export default withRouter(Create)
