import React,{ Fragment } from 'react'

const items = [
  {name: 'Home',link: '/'},
  {name: 'Employee',subItems:[
    {name:'Home',link: '/employee'},
    {name:'Employee Type',link: '/employee/type'},
    {name:'Create',link: '/employee/create'},
  ]},
  {name: 'Category',subItems:[
    {name:'New Category',link: '/category/create'},
    {name:'New Brand',link: '/brand/create'},
    {name:'Brands',link: '/brand'},
    {name:'Categories',link: '/category'},
    {name:'Products',link: '/product'},
    {name:'New Product',link: '/product/create'},
  ]},
  {name: 'Branch',subItems:[
    {name:'Create',link: ''},
    {name:'Employees',link: ''},
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
    {name:'Vendors',link: '/vendor'},
    {name:'Create',link: '/vendor/create'},
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
            items.map((item,index) => {
              return <Item key={index} {...item} />
            })
          }

        </ul>
      </div>
    </div>
  )
}

const Item = ({ name, link, subItems }) => (
  <li className="nav-item">
    {!link ?
      <Fragment>
        <div style={{cursor: 'pointer'}} data-toggle="collapse" data-target={`#${name}Collapse`} className="nav-link text-light d-flex"><span className="mr-auto">{name}</span> <i className="fa fa-sort-down"></i></div>
        {subItems && <ul className="nav flex-column ml-4 pt-0 collapse" id={`${name}Collapse`}>
          {Object.keys(subItems).length > 0 && subItems.map((item,index) => {
            return <li key={index} className="nav-item"><a className="nav-link text-light" href={item.link}>{item.name}</a></li>
          })}
        </ul>}
      </Fragment> :
      <a href={link} data-toggle="collapse" data-target={`#${name}Collapse`} className="nav-link text-light d-flex" href={link}><span className="mr-auto">{name}</span></a>
    }
  </li>
)


export default Controller
