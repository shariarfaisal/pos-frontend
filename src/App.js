import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Employee from './pages/employee/Index'
import EmployeeType from './pages/employee/Type'
import EmployeeCreate from './pages/employee/Create'
import Category from './pages/category/Category'
import Products from './pages/product/Products'
import Product from './pages/product/Product'
import Item from './pages/product/Item'
import Vendors from './pages/vendor/Vendors'
import Brands from './pages/brand/Brands'
import Branches from './pages/branch/Branches'

import tokenHandler from './utils/tokenHandler'

const token = localStorage.getItem('employee-token')

let pages = [
  {path: '/',component: Login},
]


const routes = [
  {path: '/',component: Home},
  {path: '/employee',component: Employee},
  {path: '/employee/type',component: EmployeeType},
  {path:'/employee/create',component: EmployeeCreate},
  {path:'/category',component: Category},
  {path:'/category/:catId',component: Products},
  {path:'/category/:catId/:proId',component: Product},
  {path:'/category/:catId/:proId/:itemId',component: Item},
  {path:'/vendor',component: Vendors},
  {path:'/brand',component: Brands},
  {path:'/branch',component: Branches},
]

if(token){
  tokenHandler({type:'setHeader',header:'employee-token',token})
  pages = routes
}

const App = () => {
  return (
    <Router>
      <Switch>
        {pages.map((i,index) => {
          return (
            <Route exact key={index} path={i.path} component={i.component} />
          )
        })}
      </Switch>
    </Router>
  )
}

export default App
