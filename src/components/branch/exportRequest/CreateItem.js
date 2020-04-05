import React,{ useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import CreateItemModal from './CreateItemModal'

const CreateItem = (props) => {
  const history = useHistory()
  const { requestId } = useParams()
  const [status,setStatus] = useState(props.status)
  const [show,setShow] = useState(false)

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
    const sure = window.confirm('Are you sure you want to delete?')
    if(sure){
      const getDelete = await axios.delete(`http://localhost:1000/api/exportRequest/${requestId}`)
      if(getDelete){
        history.push('/exportRequest')
      }
    }
  }

  return(
    <div className="mb-4 create-item">
      <div className="d-flex">
        {status === 'create' && <button
          type="button"
          className="btn rounded-circle btn-light mx-2"
          title="Create New Item"
          onClick={e => setShow(true)}
        >
          <i className="fa fa-plus text-success"></i>
        </button>}
        {status === 'create' && props.itemLength > 0 &&  <button
          type="button"
          className="btn rounded-circle btn-light mx-2"
          title="Sent Export Request"
          onClick={sentRequest}
        >
          <i className="fa fa-paper-plane text-info"></i>
        </button>}
        {status === 'pending' && <button
          type="button"
          className="btn rounded-circle btn-light mx-2"
          onClick={cancelRequest}
          title="Cancel Request"
        >
          <i className="fa fa-window-close text-warning"></i>
        </button>}
        {(status === 'create' || status === 'pending') && <button
          type="button"
          className="btn rounded-circle btn-light mx-3"
          onClick={deleteRequest}
          title="Delete Request"
        >
          <i className="fa fa-trash text-danger"></i>
        </button>}
      </div>
      <div className="collapse mt-4" id="createItem">
        <CreateItemModal requestId={requestId} show={show} setShow={setShow} />
      </div>
    </div>
  )
}
export default CreateItem
