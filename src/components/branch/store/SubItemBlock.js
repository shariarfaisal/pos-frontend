import React,{ useState } from 'react'
import axios from 'axios'



const SubItemBlock = ({ _id, name, code, item, branchSubItem: bsi }) => {
  const [branchSubItem,setBranchSubItem] = useState(bsi)

  const addBranchSubItem = async e => {
    const set = await axios.post(`http://localhost:1000/api/branchItem/${item}`,{ item: _id })
    if(set){
      setBranchSubItem(set.data)
    }
  }

  const removeBranchSubItem = async e => {
    const remove = await axios.delete(`http://localhost:1000/api/branchItem/${item}/${branchSubItem._id}`)
    if(remove){
      setBranchSubItem(false)
    }
  }

  return(
    <div className="col-md-6 col-lg-4 my-2">
      <div className="light-border py-2">
        <p className="mb-0 h6">{name}</p>
        <div className="d-flex justify-content-between">
          <small className="text-muted">@{code}</small>
          <span title="Add to Wishlist">
            {!branchSubItem && <i onClick={addBranchSubItem} className="fa fa-heart text-secondary pointer"></i>}
            {branchSubItem && <i onClick={removeBranchSubItem} className="fa fa-heart text-danger pointer"></i>}
          </span>
        </div>
      </div>
    </div>
  )
}


export default SubItemBlock
