import React,{ useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

const CreateItem = (props) => {
  const history = useHistory()
  const { requestId } = useParams()
  const [status,setStatus] = useState(props.status)
  const [code,setCode] = useState('')
  const [quantity,setQuantity] = useState(0)
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')

  const submitHandler = async e => {
    e.preventDefault()
    try{
      const add = await axios.post(`http://localhost:1000/api/exportRequest/${requestId}/item`,{ code, quantity })
      if(add){
        setError('')
        console.log(add.data);
        setSuccess("Item added!")
        setCode('')
        setQuantity(0)
      }
    }catch(err){
      setSuccess('')
      setError(err.response.data)
    }
  }

  const sentRequest = async e => {
    const getSend = await axios.put(`http://localhost:1000/api/exportRequest/${requestId}/send`)
    if(getSend){
      setStatus(getSend.data.status)
    }
  }

  const cancelRequest = async e => {
    const getCancel = await axios.put(`http://localhost:1000/api/exportRequest/${requestId}/cancel`)
    if(getCancel){
      setStatus(getCancel.data.status)
    }
  }

  const deleteRequest = async e => {
    const getDelete = await axios.delete(`http://localhost:1000/api/exportRequest/${requestId}`)
    if(getDelete){
      history.push('/exportRequest')
    }
  }

  return(
    <div className="py-3">
      <div className="d-flex">
        {status === 'create' && <button
          type="button"
          className="btn btn-sm btn-light"
          data-toggle="collapse"
          data-target="#createItem"
        >
          <i className="fa fa-plus text-success"></i> Add New Item
        </button>}
        {status === 'create' && props.itemLength > 0 &&  <button
          type="button"
          className="btn btn-sm btn-light mx-3"
          onClick={sentRequest}
        >
          <i className="fa fa-paper-plane text-success"></i> Sent Request
        </button>}
        {status === 'pending' && <button
          type="button"
          className="btn btn-sm btn-light mx-3"
          onClick={cancelRequest}
        >
          <i className="fa fa-window-close text-warning"></i> Cancel Request
        </button>}
        {(status === 'create' || status === 'pending') && <button
          type="button"
          className="btn btn-sm btn-light mx-3"
          onClick={deleteRequest}
        >
          <i className="fa fa-trash text-danger"></i> Delete Request
        </button>}
      </div>
      <div className="collapse mt-4" id="createItem">
        <form onSubmit={submitHandler} className="row light-border">
          {success && <div className="col-12 mb-3">
            <p className="text-center text-success mb-0">{success}</p>
          </div>}
          <div className="form-group col-md-6 col-lg-4">
            <label htmlFor="item_code">Item Code</label>
            <input
              type="text"
              id="item_code"
              required
              value={code}
              className="form-control"
              onChange={e => setCode(e.target.value)}
              placeholder="Code"
            />
            {error && error.code && <small className="text-danger">*{error.code}</small>}
          </div>
          <div className="form-group col-md-6 col-lg-4">
            <label htmlFor="item_quantity">Item Quantity</label>
            <input
              type="number"
              id="item_quantity"
              required
              value={quantity}
              className="form-control"
              onChange={e => setQuantity(e.target.value)}
              placeholder="Quantity"
              min="0"
            />
            {error && error.quantity && <small className="text-danger">*{error.quantity}</small>}
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-sm btn-success">Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default CreateItem
