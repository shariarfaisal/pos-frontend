import React,{ Fragment } from 'react'
import { Link } from 'react-router-dom'
import ControllerItem from './ControllerItem'

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

const Controller = (props) => {
return(
    <div id="controller">
      <div className="logo bg-info sticky-top">
        <h1>POINTOF</h1>
      </div>
      <div className="items">
        <ul className="nav flex-column">
          {
            items.map((item,index) => <ControllerItem key={index} {...item} /> )
          }
        </ul>
      </div>
    </div>
  )
}



export default Controller
