import React from 'react'
import Core from '../../layouts/Core'
import ItemBody from '../../components/ownar/product/subItem/SubItem'
import SubItemLocalContextProvider from '../../components/ownar/product/subItem/SubItemLocalContext'

const SubItem = (props) => {
  return(
    <SubItemLocalContextProvider>
      <Core>
        <div className="products">
          <div className="row justify-content-center">
            <ItemBody />
          </div>
        </div>
      </Core>
    </SubItemLocalContextProvider>
  )
}

export default SubItem
