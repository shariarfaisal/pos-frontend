import React from 'react'
import SubItems from '../subItem/SubItems'
import ItemInfo from './ItemInfo'


const Item = (props) => {
  return(
    <div className="col-12">
      <ItemInfo />
      <SubItems />
    </div>
  )
}
export default Item
