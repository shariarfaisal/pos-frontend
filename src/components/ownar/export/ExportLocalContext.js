import React,{ createContext, useState } from 'react'
import route from '../../../action/route'


export const ExportLocalContext = createContext()

const ExportLocalContextProvider = ({ children }) => {
  const [requests,setRequests] = useState(null)
  const [request,setRequest] = useState(null)


  const getSetRequests = async () => {
    const sts = JSON.stringify(['pending','process','complete'])
    const get = await route({ endpoint: `/exportRequest?status=${sts}`, data:{}, req: 'get'})
    if(get.data){
      setRequests(get.data)
    }
  }

  const acceptRequest = async (id) => {
    const get = await route({ endpoint: `/exportRequest/${id}/accept`, data:{}, req: 'put'})
    if(get.data){
      const req = requests.find(i => i._id === id)
      if(req){
        req.status = get.data.status
        setRequests([...requests])
      }
    }
    return get
  }

  const getSetRequest = async (id) => {
    const get = await route({ endpoint: `/exportRequest/${id}`, data:{}, req: 'get'})
    if(get.data){
      setRequest(get.data)
    }
  }

  return(
    <ExportLocalContext.Provider value={{
      requests,
      request,
      getSetRequests,
      getSetRequest,
      acceptRequest
    }}>
      { children }
    </ExportLocalContext.Provider>
  )
}
export default ExportLocalContextProvider
