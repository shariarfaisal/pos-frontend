import React,{ useState, memo } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const CreateSubItem = ({ setCreateMode, itemId, setItems, items }) => {
  const { requestId } = useParams()
  const [code,setCode] = useState('')
  const [quantity,setQuantity] = useState(1)
  const [error,setError] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    try{
      const post = await axios.post(`http://localhost:1000/api/exportRequest/${requestId}/${itemId}/subItem`)
        if(post){
          setError('')
          setCode('')
          setQuantity('')
          setItems([...items,post.data])
        }
    }catch(err){
      setError(err.response.data)
    }
  }

  return (
    <div className="border-bottom p-3 bg-white">
      {error && Object.keys(error).map((err,i) => <small className="text-danger d-block text-center">{error[err]}</small> )}
      <form onSubmit={submitHandler} className="row justify-content-center">
        <div className="col-md-7 col-xl-7 my-2">
          <label htmlFor="code">Code</label>
          <input
            className="form-control"
            id="code"
            type="text"
            value={code}
            placeholder="Code"
            onChange={e => setCode(e.target.value)}
          />
        </div>
        <div className="col-md-5 col-xl-5 my-2">
          <label htmlFor="quantity">Quantity</label>
          <input
            min="1"
            type="number"
            id="quantity"
            className="form-control"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            placeholder="Quantity"
          />
        </div>
        <div className="col-12 d-flex justify-content-end mt-2">
          <button onClick={e => setCreateMode(false)} type="button" className="btn btn-sm btn-danger px-3 mx-2">cancel</button>
          <button type="submit" className="btn btn-sm btn-success px-3">add</button>
        </div>
      </form>
    </div>
  )
}

export default memo(CreateSubItem)
