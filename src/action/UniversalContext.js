import React,{ createContext, useState, useEffect } from 'react'
import route from './route'

const getData = async ({i,data,setData}) => {
  const result = await route(i.payload)
  if(result.info ){
    data[i.name] = result
    setData({...data})
  }
}

export const UniversalContext = createContext()

const UniversalContextProvider = ({ children }) => {
  const [data,setData] = useState({})
  const [payloads,setPayloads] = useState([])

  const setPayload = (arg) => {
    payloads.push(arg)
    setPayloads([...payloads])
  }

  // const changeData = (arg) => {
  //   if(arg.type === 'create'){
  //     data[Object.keys(arg.data)[0]].data.push(arg.data)
  //     setData({...data})
  //   }
  // }

  useEffect(() => {
    payloads.forEach(i => {
      getData({i, setData, data })
    })
  },[])

  return(
    <UniversalContext.Provider value={{ data, setPayload }}>
      { children }
    </UniversalContext.Provider>
  )
}
export default UniversalContextProvider
