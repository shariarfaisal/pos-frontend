import React,{ useContext } from 'react'
import { ImportContext } from '../../../store/ImportContext'
import ImportItem from './ImportItem'
import CreateImport from './CreateImport'

const Imports = (props) => {
  const context = useContext(ImportContext)

  return(
    <div className="col-lg-10 p-3">
      <div className="row">
        <CreateImport />
        {context.imports.map(i => <ImportItem key={i._id} {...i} />)}
      </div>
    </div>
  )
}
export default Imports
