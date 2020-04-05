import React,{ useState } from 'react'
import CreateItem from './CreateItem'
import ItemBlock from './ItemBlock'



const ExportRequestItems = ({ items, status }) => {
  return(
    <div className="export-request-items">
      <CreateItem status={status} itemLength={items.length}/>
      <div className="row">
        {items.map((item,i) => <ItemBlock key={i} {...item} status={status} /> )}
      </div>
    </div>
  )
}
export default ExportRequestItems
