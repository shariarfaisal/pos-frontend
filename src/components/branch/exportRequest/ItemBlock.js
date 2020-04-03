import React,{ useState, Fragment } from 'react'
import CreateSubItem from './CreateSubItem'

const SubItemComponent = ({ item, quantity }) => {
  return (
    <div className="col-sm-6 col-md-4 col-xl-6 my-2 bg-white p-2 border rounded">
      <p className="mb-0">{item.name}</p>
      <small className="text-muted"> Quantity <span className="badge badge-info">{quantity}</span></small>
    </div>
  )
}

const ItemBlock = ({ subItems, _id, item, quantity }) => {
  const [createMode,setCreateMode] = useState(false)
  const [items,setItems] = useState(subItems)
  return (
    <div className="col-xl-6 my-2">
      <div className="light-border">
        {!createMode ? <Fragment>
          <div className="d-flex justify-content-between">
            <h5 className="">{item.name}</h5>
            <button onClick={e => setCreateMode(true)} className="ml-3 btn btn-light btn-sm"><i className="fa fa-plus text-success"></i> add item</button>
          </div>
          <p className="mb-0">Quantity <span className="badge badge-warning">{quantity}</span></p>
        </Fragment>: <CreateSubItem items={items} setItems={setItems} itemId={_id} setCreateMode={setCreateMode} />}
        {items.length > 0 && <div className="pt-3 row">
          {items.map((sub,i) => <SubItemComponent key={i} {...sub}/> )}
        </div>}
      </div>
    </div>
  )
}

export default ItemBlock
