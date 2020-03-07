import React from 'react'
import Controller from '../components/core/Controller'
import Content from '../components/core/Content'

const items = [
  {name: 'Home',link: '/',subItems:[]},
  {name: 'Employee',subItems:[
    {name:'Home',link: '/employee'},
    {name:'Employee Type',link: '/employee/type'},
    {name:'Create',link: '/employee/create'},
  ]},
  {name: 'Category',subItems:[
    {name:'Category',link: '/category'},
    {name:'Brands',link: '/brand'}
  ]},
  {name: 'Branch',subItems:[
    {name:'Branches',link: '/branch'},
  ]},
  {name: 'Export',subItems:[
    {name:'Create',link: ''},
    {name:'Employees',link: ''},
  ]},
  {name: 'Import',subItems:[
    {name:'Create',link: ''},
    {name:'Employees',link: ''},
  ]},
  {name: 'Vendor',subItems:[
    {name:'Vendors',link: '/vendor'}
  ]},
]

const Core = ({ children }) => {
return(
  <div className="app-row d-flex">
    <Controller items={items}/>
    <Content>
      {children}
    </Content>
  </div>
  )
}
export default Core
