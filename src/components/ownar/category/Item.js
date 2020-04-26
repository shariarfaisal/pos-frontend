import React,{ useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { CategoryContext } from '../../../store/CategoryContext'
import CloneCorner from '../../CloneCorner'

const Item = ({ _id, name, history }) => {
  const { getDelete, setCategories, categories } = useContext(CategoryContext)

  const onDeleteHandle = async (e) => {
    const confirm = window.confirm('Are you sure you want to delete this?')
    if(confirm){
        const { data } = await getDelete(_id)
        if(data){
          const index = categories.findIndex(i => i._id === data._id)
          categories.splice(index,1)
          setCategories([...categories])
        }
    }
  }

  return (
    <div onDoubleClick={e => history.push(`/category/${_id}`)} className="col-sm-6 col-md-4 col-lg-3 my-2">
      <div className="p-3 gray-border shadow min-h-1">
        <div className="d-flex justify-content-between">
          <h6 className="m-0"><Link className="text-dark" to={`/category/${_id}`}>{name}</Link></h6>
          <CloneCorner>
            <div className="item">Update</div>
            <div onClick={onDeleteHandle} className="item">Delete</div>
          </CloneCorner>
        </div>
      </div>
    </div>
  )
}


export default withRouter(Item)
