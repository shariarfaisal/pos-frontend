import React,{ useContext, useEffect } from 'react'
import { SubItemLocalContext } from './SubItemLocalContext'
import { useParams }  from 'react-router-dom'
import SubItemInfo from './SubItemInfo'

const SubItem = (props) => {
  const { subItemId } = useParams()
  const { subItem, getSetSubItem } = useContext(SubItemLocalContext)

  useEffect(() => {
    getSetSubItem(subItemId)
  },[])

  return(
    <div className="col-xl-11">
      <SubItemInfo />
    </div>
  )
}
export default SubItem
