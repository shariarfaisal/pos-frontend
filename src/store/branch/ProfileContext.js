import React,{ useEffect, useState, createContext } from 'react'
import Custom from '../Custom'

const custom = new Custom('branch')

export const ProfileContext = createContext()

const ProfileContextProvider = ({ children }) => {
  const [info,setInfo] = useState({})

  useEffect(() => {
    custom.getMe(setInfo)
  },[])
  return(
    <ProfileContext.Provider value={{
      info,
      setInfo
    }}>
      { children }
    </ProfileContext.Provider>
  )
}


export default ProfileContextProvider
