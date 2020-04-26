import React,{ useState, useContext } from 'react'
import { ProductLocalContext } from './ProductLocalContext'


const ProductUpdate = ({ setUpdateMode, id, name: nme }) => {
  const [name,setName] = useState(nme)
  const [error,setError] = useState('')
  const { getUpdate } = useContext(ProductLocalContext)

  const submitHandler = async e => {
    e.preventDefault()
    const { error, data } = await getUpdate(id,{ name })
    if(data) setUpdateMode(false)
    if(error) setError(error.data)
  }

  return(
    <div className="p-3 gray-border shadow d-flex justify-content-between min-h-1">
      <form className="row" onSubmit={submitHandler}>
        <div className="col-12">
          {error.msg && <small className="text-danger d-block text-center">{error.msg}</small>}
          <input
            onChange={e => setName(e.target.value)}
            type="text"
            value={name}
            className="form-control form-control-sm"
          />
          {error.name && <small className="text-danger">{error.name}</small>}
        </div>
        <div className="col-12 row justify-content-end mt-2">
          <button onClick={e => setUpdateMode(false)} type="button" className="btn btn-sm btn-light font-6 border mx-2">Cancel</button>
          <button type="submit" className="btn btn-sm btn-light-blue font-6 border">Save</button>
        </div>
      </form>
    </div>
  )
}
export default ProductUpdate
