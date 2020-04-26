import React,{ useContext, useEffect, useState } from 'react'
import { BrandLocalContext } from './BrandLocalContext'
import { Modal } from 'react-bootstrap'
import ModalFooter from '../../ModalFooter'
import { useParams } from 'react-router-dom'

const AddProduct = ({ show, setShow }) => {
  const { brandId } = useParams()
  const [product,setProduct] = useState('')
  const [error,setError] = useState('')
  const { products, getSetProducts, addProductIntoBrand } = useContext(BrandLocalContext)

  const submitHandler = async e => {
    e.preventDefault()
    const get = await addProductIntoBrand(brandId,{ product })
    if(get.error){
      setError(get.error.data)
    }
  }

  useEffect(() => {
    getSetProducts()
  },[])

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
          <h2 className="my-4 text-center h4">Add New Product Item</h2>
          {error.msg && <div><p className="text-danger text-center">{error.msg}</p></div>}
          <div className="form-group">
            <label htmlFor="name">Product</label>
            <select className="form-control" value={product} onChange={e => setProduct(e.target.value)}>
              <option value="">Select One</option>
              {products && products.map((cat,i) => {
                return <option className={cat._id}>{cat.name}</option>
              })}
            </select>
            {error.product && <small className="text-danger">{error.product}</small>}
          </div>
          <ModalFooter show={show} setShow={setShow} />
        </form>
      </Modal.Body>
    </Modal>
  )
}
export default AddProduct
