import React,{ useState, useEffect, useContext } from 'react'
import { BrandContext } from '../../../store/BrandContext'
import { useParams } from 'react-router-dom'
import BrandItems from './BrandItems'


const Brand = (props) => {
  const { brandId } = useParams()
  const [brand,setBrand] = useState(null)
  const context = useContext(BrandContext)

  useEffect(() => {
    context.brand(brandId,setBrand)
  },[])

  return(
    <div className="col-lg-11">
      {brand && <h3 className="text-center mb-5">{brand.name} <span className="text-muted" title="brand code" style={{fontSize: '17px'}}>#{brand.code}</span></h3>}
      <BrandItems brandId={brandId}/>
    </div>
  )
}

export default Brand
