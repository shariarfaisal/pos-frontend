import React,{ useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SubItemLocalContext } from './SubItemLocalContext'
import CloneCorner from '../../../CloneCorner'
import UpdateItemModal from './UpdateItemModal'
import { useHistory } from 'react-router-dom'



const ItemInfo = (props) => {
  const history = useHistory()
  const { itemId } = useParams()
  const [show,setShow] = useState(false)
  const { item, getSetItem, getUpdateItem, getDeleteItem } = useContext(SubItemLocalContext)

  useEffect(() => {
    getSetItem(itemId)
  },[])

  const onDeleteHandler = async () => {
    const confirm = window.confirm('Are you sure you want to delete this?')
    if(confirm){
      const get = await getDeleteItem(itemId)
      if(get.data){
        history.goBack()
      }
      if(get.error){
        console.log(get.error.data);
      }
    }
  }


  return (
    item && <div className="item-info mb-4">
      <UpdateItemModal show={show} setShow={setShow} {...item}  getUpdateItem={getUpdateItem}/>
      <div className="row mx-0">
        <img src={`/img/${item.image}`} className="col-md-6 rounded p-0 light-shadow my-1" alt={item.name} />
        <div className="col-md-6 my-1 pr-0">
          <div className="gray-border h-100 light-shadow">
            <div className="d-flex justify-content-between">
              <h5 className="mb-0"><span className="text-muted">{item.product.name}/ </span>{item.name}</h5>
              <CloneCorner>
                <div onClick={e => setShow(true)} className="item d-flex align-items-center"><i className="fa fa-edit mx-1"></i> Update</div>
                <div onClick={onDeleteHandler} className="item d-flex align-items-center"><i className="fa fa-trash mx-1"></i> Delete</div>
              </CloneCorner>
            </div>
            <small className="text-muted">@{item.code}</small>
          </div>
        </div>
        <div className="col-12 mt-2 gray-border light-shadow">
          <p className="mb-0">{item.description}</p>
        </div>
      </div>
    </div>
  )
}


export default ItemInfo
