import React from 'react'
import BranchLayout from '../../layouts/BranchLayout'
import Body from '../../components/branch/wishlist/Items'

const WishList = (props) => {
return(
  <BranchLayout>
    <div className="wishlist">
      <div className="row justify-content-center">
        <Body />
      </div>
    </div>
  </BranchLayout>
  )
}
export default WishList
