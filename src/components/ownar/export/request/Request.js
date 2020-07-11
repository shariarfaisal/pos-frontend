import React,{ useContext, useEffect } from 'react'
import { ExportLocalContext } from '../ExportLocalContext'
import { useParams } from 'react-router-dom'
import RequestItems from './RequestItems'
import RequestHeader from './RequestHeader'


const Request = (props) => {
  const { request, getSetRequest } = useContext(ExportLocalContext)
  const { reqId } = useParams()

  useEffect(() => {
    getSetRequest(reqId)
  },[])

  return(
    request && <div className="col-xl-11 request">
      <RequestHeader
        branch={request.branch}
        title={request.title}
        status={request.status}
        createdAt={request.createdAt}
      />
      <RequestItems items={request.items} />
    </div>
  )
}



export default Request
