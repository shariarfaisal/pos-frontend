import React,{ useState, useContext } from 'react'
import { Modal } from 'react-bootstrap'
import axios from 'axios'
import { ExportRequestContext } from './ExportRequestContext'


const CreateItemModal = ({ show, setShow }) => {
  const [code,setCode] = useState('')
  const [quantity,setQuantity] = useState(0)
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')
  const { requestId, setItem } = useContext(ExportRequestContext)



  const submitHandler = async e => {
    e.preventDefault()
    try{
      const add = await axios.post(`http://localhost:1000/api/exportRequest/${requestId}/item`,{ code, quantity })
      if(add){
        setError('')
        setSuccess("Item added!")
        setCode('')
        setQuantity(0)
        setItem(add.data)
      }
    }catch(err){
      setSuccess('')
      setError(err.response.data)
    }
  }

  const msgCleaner = (e) => {
    setSuccess('')
    setError('')
  }


  return(
    <Modal
        show={show}
        onHide={e => setShow(false)}
        size="lg"
        aria-labelledby="create-item-modal"
        centered
      >
      <Modal.Body>
        <div className="p-4">
          <h5 className="text-center">Create Export Item</h5>
          <form onSubmit={submitHandler} className="row">
            {success && <div className="col-12 mb-3">
              <p className="text-center text-success mb-0">{success}</p>
            </div>}
            {error && <div className="col-12 mb-3">
              {Object.keys(error).map((err,i) => <p key={i} className="mb-0 text-center text-danger">{error[err]}</p>)}
            </div>}
            <div className="col-md-6 my-2">
              <div className="form-group">
                <label htmlFor="item_code">Item Code</label>
                <input
                  type="text"
                  id="item_code"
                  required
                  value={code}
                  onKeyPress={msgCleaner}
                  className="form-control"
                  onChange={e => setCode(e.target.value)}
                  placeholder="Code"
                />
              </div>
              {error && error.code && <small className="text-danger">*{error.code}</small>}
            </div>
            <div className="col-md-6 my-2">
              <div className="form-group">
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
              </div>
              {error && error.quantity && <small className="text-danger">*{error.quantity}</small>}
            </div>
            <div className="col-12 d-flex justify-content-end">
              <button onClick={e => setShow(false)} type="button" className="btn btn-light text-danger px-3">Cancel</button>
              <button disabled={code ? false: true} type="submit" className="btn btn-light text-success px-3 mx-2">Create</button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  )
}
export default CreateItemModal
