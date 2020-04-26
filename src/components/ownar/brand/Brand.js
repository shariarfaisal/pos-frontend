import React,{ useEffect, useContext } from 'react'
import { BrandLocalContext } from './BrandLocalContext'
import { useParams } from 'react-router-dom'
import BrandItems from './BrandItems'
import Products from './Products'

const Brand = (props) => {
  const { brandId } = useParams()
  const { brand, getSetBrand } = useContext(BrandLocalContext)

  useEffect(() => {
    getSetBrand(brandId)
  },[])

  return(
    <div className="col-lg-11">
      {brand && <h3 className="text-center mb-5">{brand.name} <span className="text-muted" title="brand code" style={{fontSize: '17px'}}>#{brand.code}</span></h3>}
      {brand && <Products categories={brand.products} />}
      <BrandItems />
    </div>
  )
}

export default Brand
