import React,{ useState, useEffect, createContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const setSubItem = async ({requestId, itemId, data, updateSubItem}) => {
  let error = null
  let success = null

  try{
    const post = await axios.post(`http://localhost:1000/api/exportRequest/${requestId}/${itemId}/subItem`,data)
      if(post){
        success = "Sub Item created!"
        error = null
        updateSubItem({ itemId, item: post.data })
      }
  }catch(err){
    success = null
    error = err.response.data
  }
  return { error, success }
}


const getRequest = async (id,set) => {
  const res = await axios.get(`http://localhost:1000/api/exportRequest/${id}`)
  if(res){
    set(res.data)
  }
}

const sentRequest = async (requestId,setStatus) => {
  const getSend = await axios.put(`http://localhost:1000/api/exportRequest/${requestId}/send`)
  if(getSend){
    setStatus(getSend.data.status)
  }
}

const cancelRequest = async (requestId,setStatus) => {
  const getCancel = await axios.put(`http://localhost:1000/api/exportRequest/${requestId}/cancel`)
  if(getCancel){
    setStatus(getCancel.data.status)
  }
}

const deleteRequest = async (requestId,history) => {
  const sure = window.confirm('Are you sure you want to delete?')
  if(sure){
    const getDelete = await axios.delete(`http://localhost:1000/api/exportRequest/${requestId}`)
    if(getDelete){
      history.push('/exportRequest')
    }
  }
}

const getRemoveItem = async ({requestId, itemId, removeItem}) => {
  const confirm = window.confirm('Are you sure you want to delete this item?')
  if(confirm){
    const del = await axios.delete(`http://localhost:1000/api/exportRequest/${requestId}/${itemId}`)
    if(del){
      removeItem(itemId)
    }
  }
}

const getRemoveSubItem = async ({requestId, itemId, subItemId, removeSubItem}) => {
  const confirm = window.confirm('Are you sure you want to delete this item?')
  if(confirm){
    try{
      const del = await axios.delete(`http://localhost:1000/api/exportRequest/${requestId}/${itemId}/${subItemId}`)
      if(del){
        removeSubItem({ itemId, subItemId })
      }
    }catch(err){
      console.log(err.response.data);
    }
  }
}

export const ExportRequestContext = createContext()

const ExportRequestContextProvider = ({ children }) => {
  const { requestId } = useParams()
  const [request,setRequest] = useState(null)

  const setStatus = (arg) => {
    setRequest({...request,status: arg})
  }

  const setItem = (item) => {
    setRequest({...request,items:[...request.items,item]})
  }

  const removeItem = (id) => {
    const index = request.items.findIndex(i => i._id.toString() === id.toString())
    request.items.splice(index,1)
    setRequest({...request})
  }

  const removeSubItem = ({ itemId, subItemId }) =>{
    const item = request.items.find(i => i._id.toString() === itemId.toString())
    const index = item.subItems.findIndex(i => i._id.toString() === subItemId.toString())
    item.subItems.splice(index,1)
    setRequest({...request})
  }

  const updateSubItem = ({ itemId, item }) => {
    const getItem = request.items.find(i => i._id.toString() === itemId.toString())
    getItem.subItems.push(item)
    setRequest({...request})
  }

  useEffect(() => {
    getRequest(requestId,setRequest)
  },[])

  return(
    <ExportRequestContext.Provider value={{
      request,
      setRequest,
      requestId,
      sentRequest,
      cancelRequest,
      setStatus,
      deleteRequest,
      setItem,
      getRemoveItem,
      removeItem,
      getRemoveSubItem,
      setSubItem,
      removeSubItem,
      updateSubItem
    }}>
      { children }
    </ExportRequestContext.Provider>
  )
}
export default ExportRequestContextProvider
