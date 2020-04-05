import React,{ useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'

const ItemBlock = ({ name, _id, code, match, history,brand, wishList }) => {
  const [branchItem,setBranchItem] = useState(wishList)

  const addBranchItem = async e => {
    const set = await axios.post(`http://localhost:1000/api/branchItem`,{ item: _id })
    if(set){
      setBranchItem(set.data)
    }
  }

  const removeBranchItem = async e => {
    const remove = await axios.delete(`http://localhost:1000/api/branchItem/${branchItem._id}`)
    if(remove){
      setBranchItem(false)
    }
  }

  return (
    <div onDoubleClick={e => history.push(`${match.url}/${_id}`)} className="col-sm-6 col-md-4 col-lg-3 my-2">
      <div className="p-2 light-border">
        <h6><Link className="text-dark" to={`${match.url}/${_id}`}>{name}</Link></h6>
        <div className="d-flex justify-content-between">
          <small className="text-muted">@{code}</small>
          <span title="Add to Wishlist">
            {!branchItem && <i onClick={addBranchItem} className="fa fa-heart text-secondary pointer"></i>}
            {branchItem && <i onClick={removeBranchItem} className="fa fa-heart text-danger pointer"></i>}
          </span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ItemBlock)
