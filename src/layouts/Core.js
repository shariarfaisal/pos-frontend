import React,{ useContext } from 'react'
import Controller from '../components/core/Controller'
import Content from '../components/core/Content'
import { ProfileContext } from '../store/ProfileContext'

const checkAccess = (access,items) => {
  return items.map(i => {
      const x = access[i.name.toLowerCase()]
      if(x && x === '----'){
        i.active = false
      }else{
        i.active = true
      }
      return i
    })
}


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
    {name:'Imports',link: '/import'},
  ]},
  {name: 'Vendor',subItems:[
    {name:'Vendors',link: '/vendor'}
  ]},
]

// const access = context.info.type.access

const Core = ({ children }) => {
  const context = useContext(ProfileContext)

  return(
    <div className="app-row d-flex">
      {context.info.type && <Controller items={checkAccess(context.info.type.access,items)}/>}
      <Content>
        {children}
      </Content>
    </div>
  )
}
export default Core
