import React,{ useState, useContext } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { ImportContext } from '../../../../store/ImportContext'
import ImportBarItem from './ImportBarItem'

const ImportBar = ({ match }) => {
  const [open,setOpen] = useState(false)
  const context = useContext(ImportContext)

  return(
    <div id="importSideBar" className="bg-info">
      {!open && <div onClick={e => setOpen(!open)} className="text-light pointer px-3 py-2">
        <i className="fa fa-cog"></i> imports
      </div>}
      {open && <div className="box-wrapper">
        <div className="m-2 text-light d-flex">
          <button onClick={e => setOpen(false)} type="button" className="btn btn-sm btn-warning text-light ml-auto">close</button>
        </div>
        <div className="list-group">
          {context.imports.map((imp,i) => <ImportBarItem key={i} {...imp} url={match.url}/>)}
        </div>
      </div>}
    </div>
  )
}


export default withRouter(ImportBar)
