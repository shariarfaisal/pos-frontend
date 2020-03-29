import React,{ useState, useContext } from 'react'
import { ProductContext } from '../../../store/ProductContext'
import { CategoryContext } from '../../../store/CategoryContext'
import CustomModal from '../../CustomModal'
import MsgBox from '../../MsgBox'

const Create = ({ category, show, setShow }) => {
  const [name,setName] = useState('')
  // const [category,setCategory] = useState('')
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const categoryContext = useContext(CategoryContext)
  const context = useContext(ProductContext)

  const submitHandler = async e => {
    e.preventDefault()
    if(name && category){
      const product = await context.getPost({ name, category })
      if(product.success){
        setError('')
        setSuccess(product.success)
        context.setProducts([...context.products,product.data.data])
        setName('');
      }else{
        setError(product.error)
      }
    }
  }

  return(
    <CustomModal
        show={show}
        setShow={setShow}
        title="Create New Item"
        submitHandler={submitHandler}
      >
      <MsgBox error={error} success={success} />
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Product Name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
    </CustomModal>
  )
}


export default Create
