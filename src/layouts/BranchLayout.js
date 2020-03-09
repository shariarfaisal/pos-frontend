import React from 'react'
import BranchController from '../components/core/BranchController'
import Content from '../components/core/Content'

const items = [
  {name: 'Home',link: '/',subItems:[]},
  {name: 'Product',link: '/',subItems:[
    {name: 'Products',link: '/product'}
  ]},
  {name: 'Sales',link: '/',subItems:[]},
]


const BranchLayout = ({ children }) => {
return(
  <div className="app-row d-flex">
    <BranchController items={items}/>
    <Content>
      {children}
    </Content>
  </div>
  )
}
export default BranchLayout
