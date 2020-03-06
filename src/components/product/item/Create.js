import React,{ useState, useContext } from 'react'
import { ProductItemContext } from '../../../store/ProductItemContext'
import { BrandContext } from '../../../store/BrandContext'
import MsgBox from '../../MsgBox'
import { withRouter } from 'react-router-dom'
import CustomModal from '../../CustomModal'


const Create = ({ show, setShow, match }) => {
  const [name,setName] = useState('')
  const [code,setCode] = useState('')
  const [brand,setBrand] = useState('')
  const [description,setDescription] = useState('')
  const image = 'image.jpg'
  const product = match.params.proId
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const context = useContext(ProductItemContext)
  const brandContext = useContext(BrandContext)

  const submitHandler = async e => {
    e.preventDefault()
    if(name && code && description && brand && image && product){
      const items = await context.getPost({ name,  code, description, image, product, brand })
      if(items.success){
        setError('')
        setSuccess(items.success)
        console.log([...context.items,items.data.data]);
        context.setItems([...context.items,items.data.data])
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
      title="Create New Item"
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
          <label htmlFor="brand">Brand</label>
          <select className="form-control form-control-sm" value={brand} onChange={e => setBrand(e.target.value)}>
            <option>Select Brand</option>
            {brandContext.brands.map((b,i) => {
              return <option key={i} value={b._id}>{b.name}</option>
            })}
          </select>
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

export default withRouter(Create)
