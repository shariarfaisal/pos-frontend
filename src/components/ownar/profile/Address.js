import React,{ useContext, useState, useEffect } from 'react'
import { ProfileLocalContext } from './ProfileLocalContext'
import UpdateProfile from './UpdateProfile'
import { useHistory } from 'react-router-dom'

const searchFinder = ({search, item}) => {
  const splits = search.substr(1).split('&').map(i => i.split('='))
  const obj =  Object.fromEntries(splits)
  return [obj[item],splits]
}

const Address = (props) => {
  const [show,setShow] = useState(false)
  const { info, getSetInfo } = useContext(ProfileLocalContext)
  const { location, replace } = useHistory()


  const editBtnHandler =  (e) => {
    if(!location.search){
      location.search = '?update=true'
    }else if(location.search.includes('update=true')){}
    else if(location.search.includes('update=false')){
      location.search = location.search.replace('update=false','update=true')
    }else if(location.search.includes('update=')){
      location.search = location.search.replace('update=','update=true')
    }else if(location.search.includes('update')){
      location.search = location.search.replace('update','update=true')
    }else if(location.search.includes('?')){
      location.search = location.search.replace('?','?update=true&')
    }
    replace(location.pathname+location.search)
    setShow(true)
  }

  useEffect(() => {
    getSetInfo()
    const search = searchFinder({ search: location.search, item: 'update'})
    if(search[0] && search[0].toString() === 'true'){
      setShow(true)
    }
  },[])


  return(
    info && <div className="profile-address gray-border" style={{
      minHeight: '300px'
    }}>
      <UpdateProfile
        show={show}
        setShow={setShow}
        info={info}
      />
      <div className="d-flex justify-content-between">
        <h3>{info.name} <small className="text-muted">#{info.type ? info.type.name: ''}</small> </h3>
        <div className="mr-md-4">
          <i onClick={editBtnHandler} className="fa fa-edit text-red-h pointer"></i>
        </div>
      </div>
      <p className="m-0 text-muted">@{info.username}</p>
      <p className="m-0"><i className="fa fa-envelope text-info"></i> {info.email}</p>
      <p className="m-0"><i className="fa fa-phone text-info"></i> {info.phone}</p>
    </div>
  )
}
export default Address
