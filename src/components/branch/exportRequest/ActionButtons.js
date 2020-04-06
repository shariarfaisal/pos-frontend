import React,{ useContext } from 'react'
import { ExportRequestContext } from './ExportRequestContext'
import { useHistory } from 'react-router-dom'


const ActionButtons = ({ setShow }) => {
  const {
    request:{ status, items },
    setStatus,
    sentRequest,
    cancelRequest,
    requestId,
    deleteRequest
  } = useContext(ExportRequestContext)
  const history = useHistory()


  return(
    <div className="action-buttons">
      <div className="d-flex">
        {status === 'create' && <button
          type="button"
          className="btn rounded-circle btn-light mx-2"
          title="Create New Item"
          onClick={e => setShow(true)}
        >
          <i className="fa fa-plus text-success"></i>
        </button>}
        {status === 'create' && items.length > 0 &&  <button
          type="button"
          className="btn rounded-circle btn-light mx-2"
          title="Sent Export Request"
          onClick={e => sentRequest(requestId,setStatus)}
        >
          <i className="fa fa-paper-plane text-info"></i>
        </button>}
        {status === 'pending' && <button
          type="button"
          className="btn rounded-circle btn-light mx-2"
          onClick={e => cancelRequest(requestId,setStatus)}
          title="Cancel Request"
        >
          <i className="fa fa-window-close text-warning"></i>
        </button>}
        {(status === 'create' || status === 'pending') && <button
          type="button"
          className="btn rounded-circle btn-light mx-3"
          onClick={e => deleteRequest(requestId,history)}
          title="Delete Request"
        >
          <i className="fa fa-trash text-danger"></i>
        </button>}
      </div>
    </div>
  )
}
export default ActionButtons
