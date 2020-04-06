import React,{ useContext } from 'react'
import CreateItem from './CreateItem'
import ItemBlock from './ItemBlock'
import { ExportRequestContext } from './ExportRequestContext'



const ExportRequestItems = (props) => {
  const { request } = useContext(ExportRequestContext)
  return(
    request && <div className="export-request-items">
      <CreateItem />
      <div className="row">
        {request.items.map((item,i) => <ItemBlock key={i} {...item} status={request.status} /> )}
      </div>
    </div>
  )
}
export default ExportRequestItems
