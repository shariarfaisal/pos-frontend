import React,{ useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SubItemLocalContext } from './SubItemLocalContext'
import CloneCorner from '../../../CloneCorner'
import UpdateSubItemModal from './UpdateSubItemModal'
import { useHistory } from 'react-router-dom'



const SubItemInfo = (props) => {
  const history = useHistory()
  const { subItemId } = useParams()
  const [show,setShow] = useState(false)
  const { subItem , getSetSubItem, getUpdateSubItem, getDeleteSubItem } = useContext(SubItemLocalContext)

  useEffect(() => {
    getSetSubItem(subItemId)
  },[])

  const onDeleteHandler = async () => {
    const confirm = window.confirm('Are you sure you want to delete this?')
    if(confirm){
      const get = await getDeleteSubItem(subItemId)
      if(get.data){
        history.goBack()
      }
      if(get.error){
        console.log(get.error.data);
      }
    }
  }


  return (
    subItem && <div className="item-info mb-4">
      <UpdateSubItemModal show={show} setShow={setShow} {...subItem}  getUpdateSubItem={getUpdateSubItem}/>
      <div className="row mx-0">
        <img src={`/img/${subItem.image}`} className="col-md-6 rounded p-0 light-shadow my-1" alt={subItem.name} />
        <div className="col-md-6 my-1 pr-0">
          <div className="gray-border h-100 light-shadow">
            <div className="d-flex justify-content-between">
              <h5 className="mb-0"><span className="text-muted">{subItem.item.name}/ </span>{subItem.name}</h5>
              <CloneCorner>
                <div onClick={e => setShow(true)} className="item d-flex align-items-center"><i className="fa fa-edit mx-1"></i> Update</div>
                <div onClick={onDeleteHandler} className="item d-flex align-items-center"><i className="fa fa-trash mx-1"></i> Delete</div>
              </CloneCorner>
            </div>
            <small className="text-muted">@{subItem.code}</small>
          </div>
        </div>
        <div className="col-12 mt-2 gray-border light-shadow">
          <p className="mb-0">{subItem.description}</p>
        </div>
      </div>
    </div>
  )
}


export default SubItemInfo
