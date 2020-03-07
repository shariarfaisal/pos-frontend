import React from 'react'
import Controller from '../components/core/Controller'
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
    <Controller items={items}/>
    <Content>
      {children}
    </Content>
  </div>
  )
}
export default BranchLayout
