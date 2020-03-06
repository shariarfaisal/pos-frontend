import React,{ createContext, useState, useEffect } from 'react'
import Custom from './Custom'
const custom = new Custom('employee')


export const ProfileContext = createContext({})

const ProfileContextProvider = ({ children }) => {
  const [info,setInfo] = useState({})

  useEffect(() => {
    custom.getMe(setInfo)
  },[])

  return(
    <ProfileContext.Provider value={{
      info,
      setInfo,
    }}>
      { children }
    </ProfileContext.Provider>
  )
}

export default ProfileContextProvider
