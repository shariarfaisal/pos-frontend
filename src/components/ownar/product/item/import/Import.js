import React,{ useState, useContext, useEffect } from 'react'
import { ProductItemContext } from '../../../../../store/ProductItemContext'
import { ImportContext } from '../../../../../store/ImportContext'
import ProductSection from './ProductSection'
import { useParams } from 'react-router-dom'
import ItemSection from './ItemSection'
import CreateItem from './CreateItem'
import ImportInfo from './ImportInfo'
import ImportItemInfo from './ImportItemInfo'


const checkItemExist = (items,id) => {
  return items.find(i => i.item._id === id)
}

const Import = (props) => {
  const { itemId, importId } = useParams()
  const [impt,setImpt] = useState(null)
  const context = useContext(ProductItemContext)
  const importContext = useContext(ImportContext)
  const [isImp,setIsImp] = useState(null)

  useEffect(() => {
    importContext.import(importId,setImpt)
  },[])

  useEffect(() => {
    if(impt && checkItemExist(impt.items,itemId)) setIsImp('exists')
    if(impt && !checkItemExist(impt.items,itemId)) setIsImp('not-exists')
  },[impt])

  return(
    <div className="col-xl-11">
      {impt && <ImportInfo {...impt} />}
      {isImp === 'exists' && <ImportItemInfo {...checkItemExist(impt.items,itemId)}/> }
      {isImp === 'not-exists' && <CreateItem impt={impt} setImpt={setImpt}/> }
      {isImp === 'exists' && <ItemSection {...checkItemExist(impt.items,itemId)} itemId={itemId}/>}
    </div>
  )
}

export default Import
