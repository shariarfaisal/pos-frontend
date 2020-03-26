import React from 'react'
import Core from '../../layouts/Core'
import ImportBody from '../../components/ownar/product/item/import/Import'
import ProductItemContextProvider from '../../store/ProductItemContext'
import ImportContextProvider from '../../store/ImportContext'


const CreateImport = (props) => {
  return(
    <ProductItemContextProvider>
      <ImportContextProvider>
        <Core>
          <div className="products">
            <div className="row justify-content-center">
              <ImportBody />
            </div>
          </div>
        </Core>
      </ImportContextProvider>
    </ProductItemContextProvider>
  )
}

export default CreateImport
