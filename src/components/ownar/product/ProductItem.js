import React,{ useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import CloneCorner from '../../CloneCorner'
import ProductUpdate from './ProductUpdate'

const ProductItem = ({ name, code, _id, match, history, getDelete }) => {
  const [updateMode,setUpdateMode] = useState(false)

  const deleteHandler = async () => {
    const confirm = window.confirm(`Are you sure you want to delete ${name}!`)
    if(confirm){
      const get = await getDelete(_id)
      if(get.error){
        console.log(get.error.data);
      }
    }
  }


  return (
    <div onDoubleClick={e => history.push(`${match.url}/${_id}`) } className="col-md-6 col-xl-4 my-3">
      {!updateMode && <div className="p-3 gray-border shadow d-flex justify-content-between min-h-1">
        <h6 className="m-0">
          <Link className="text-dark" to={`${match.url}/${_id}`}>{name}</Link>
          <span className="text-muted ml-2">@{code}</span>
        </h6>
        <CloneCorner>
          <div onClick={e => setUpdateMode(true)} className="item">Update</div>
          <div onClick={deleteHandler} className="item">Delete</div>
        </CloneCorner>
      </div>}
      {updateMode &&
      <ProductUpdate
        id={_id}
        name={name}
        setUpdateMode={setUpdateMode}
      />}
    </div>
  )
}


export default withRouter(ProductItem)
