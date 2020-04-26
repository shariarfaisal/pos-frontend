import React,{ useState, useContext } from 'react'
import { ProductLocalContext } from './ProductLocalContext'
import CustomModal from '../../CustomModal'

const Create = ({ category, show, setShow }) => {
  const [name,setName] = useState('')
  const [code,setCode] = useState('')
  const [error,setError] = useState('')
  const { createProduct } = useContext(ProductLocalContext)

  const submitHandler = async e => {
    e.preventDefault()
    const { error, data } = await createProduct({ name, code, category })
    if(data) setShow(false)
    if(error) setError(error.data)
  }

  return(
    <CustomModal
        show={show}
        setShow={setShow}
        title="Create New Product"
        submitHandler={submitHandler}
        size="lg"
      >
        <div className="row">
          <div className="col-12">
            {error.msg && <small className="my-3 text-danger text-center d-block">{error.msg}</small>}
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Name"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            {error.name && <small className="text-danger">{error.name}</small>}
          </div>
          <div className="form-group col-lg-6">
            <label htmlFor="code">Code</label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Code"
              id="code"
              value={code}
              onChange={e => setCode(e.target.value)}
            />
          {error.code && <small className="text-danger">{error.code}</small>}
          </div>
        </div>
    </CustomModal>
  )
}


export default Create
