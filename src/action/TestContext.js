import React,{ useReducer, createContext } from 'react'
import route from './route'

// Create Context
export const testContext = createContext()


// Reducer
const reducer = async (state,action) => {
  switch (action.type) {
    case 'GET_ALL':
      return await route({ endpoint: '/branch', data:{}, req: 'get'})
    case 'GET_BY_ID':
      return  await route({ endpoint: `/branch/${action.payload.id}`, data:{}, req: 'get'})
    case 'CREATE':
      return  await route({ endpoint: '/branch', data: action.payload.data, req: 'post'})
    case 'UPDATE':
      return  await route({ endpoint: `/branch/${action.payload.id}`, data: action.payload.data, req: 'put'})
    case 'DELETE':
      return  await route({ endpoint: `/branch/${action.payload.id}`, data:{}, req: 'delete'})
    default:
      return state
  }
}

const TestContext = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,null)
  return(
    <TestContext.Provider value={{ state, dispatch }}>
      { children }
    </TestContext.Provider>
  )
}
export default TestContext
