import React,{ useState, useContext } from 'react'
import { CategoryContext } from '../../../store/CategoryContext'
import Item from './Item'
import Create from './Create'
import CreateBox from '../../CreateBox'



const Items = (props) => {
  const [show,setShow] = useState(false)
  const context = useContext(CategoryContext)

  return(
    <div className="category-items col-12 col-xl-11 mt-2 mb-5">
      <CreateBox setShow={setShow} title="Create New">
        <Create show={show} setShow={setShow}/>
      </CreateBox>
      <div className="row">
        {context && context.categories.map((item,i) => {
          return <Item key={i} {...item} />
        })}
      </div>
    </div>
  )
}
export default Items
