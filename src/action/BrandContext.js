import React,{ useReducer, useState,useEffect, createContext } from 'react'
import route from './route'

// Create Context
export const BrandContext = createContext()


// Reducer
const reducer = (state,action) => {
  switch (action.type) {
    case 'GET_ALL':
      return route({ endpoint: '/brand', data:{}, req: 'get'})
    case 'GET_BY_ID':
      return route({ endpoint: `/brand/${action.payload.id}`, data:{}, req: 'get'})
    case 'CREATE':
      return route({ endpoint: '/brand', data: action.payload.data, req: 'post'})
    case 'UPDATE':
      return route({ endpoint: `/brand/${action.payload.id}`, data: action.payload.data, req: 'put'})
    case 'DELETE':
      return route({ endpoint: `/brand/${action.payload.id}`, data:{}, req: 'delete'})
    default:
      return state
  }
}

const BrandContextProvider = ({ children }) => {
  const [brands,setBrands] = useState(null)
  const [state,dispatch] = useReducer(reducer,null)
  let [reload,setReload] = useState(false)
  const [data,setData] = useState(null)

  const getDispatch = (arg) => {
    dispatch(arg)
    setReload(true)
  }

  useEffect(() => {
    if(state){
      state.then(res => {
        setData(res)
      })
    }
  },[reload])

  return(
    <BrandContext.Provider value={{ state: data, dispatch: getDispatch }}>
      { children }
    </BrandContext.Provider>
  )
}
export default BrandContextProvider
