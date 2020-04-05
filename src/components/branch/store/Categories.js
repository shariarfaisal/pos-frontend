import React,{ useState, useContext } from 'react'
import { CategoryContext } from '../../../store/CategoryContext'
import { Link } from 'react-router-dom'

const Categories = (props) => {
  const { categories } = useContext(CategoryContext)

  return(
    <div className="col-xl-11">
      <div className="row">
        {categories.map((category,i) => {
          return(
            <div key={i} className="col-md-6 col-lg-4 col-xl-3 my-2">
              <div className="light-border">
                <p className="mb-0"><Link className="text-dark" to={`/store/${category._id}`}>{category.name}</Link></p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Categories
