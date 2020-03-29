import React,{ useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import ImportBarItem from './ImportBarItem'
import axios from 'axios'

const getImport = async (set) => {
  const lt = new Date().getTime()
  const gt = lt - 86400000
  const impts = await axios.get(`http://localhost:1000/api/import/active?gt=${gt}&lt=${lt}`)
  if(impts){
    set(impts.data)
  }
}

const ImportBar = ({ match }) => {
  const [open,setOpen] = useState(false)
  const [impts,setImpts] = useState([])

  useEffect(() => {
    getImport(setImpts)
  },[])

  return(
    <div id="importSideBar" className="bg-info">
      {!open && <div onClick={e => setOpen(!open)} className="text-light pointer px-3 py-2">
        <i className="fa fa-cog"></i> imports
      </div>}
      {open && <div className="box-wrapper">
        <div className="m-2 text-light d-flex">
          <button onClick={e => setOpen(false)} type="button" className="btn btn-sm btn-warning text-light ml-auto">close</button>
        </div>
        <div className="overflow border-bottom">
          <div className="list-group">
            {impts.map((imp,i) => <ImportBarItem key={i} {...imp} url={match.url}/>)}
          </div>
        </div>
      </div>}
    </div>
  )
}


export default withRouter(ImportBar)
