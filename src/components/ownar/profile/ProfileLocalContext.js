import React,{ createContext, useState } from 'react'
import route from '../../../action/route'


export const ProfileLocalContext = createContext()

const ProfileLocalContextProvider = ({ children }) => {
  const [info,setInfo] = useState(null)

  const getUpdate = async (data) => {
    const get = await route({ endpoint: '/employee', data, req: 'put'})
    if(get.data){
      setInfo(get.data)
    }
    return get
  }

  const getSetInfo = async () => {
    const get = await route({ endpoint: '/employee/me', data:{}, req: 'get'})
    if(get.data){
      setInfo(get.data)
    }
  }


  return(
    <ProfileLocalContext.Provider value={{
      info, setInfo, getUpdate, getSetInfo
    }}>
      { children }
    </ProfileLocalContext.Provider>
  )
}
export default ProfileLocalContextProvider
