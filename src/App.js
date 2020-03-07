import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import BranchLogin from './pages/BranchLogin'

import Home from './pages/Home'
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
import Profile from './pages/profile/Profile'

import BranchRoutes from './branch/routes'

import tokenHandler from './utils/tokenHandler'

const employeeToken = localStorage.getItem('employee-token')
const branchToken = localStorage.getItem('branch-token')

let pages = [
  {path: '/',component: Login},
  {path: '/branch',component: BranchLogin},
]


const EmployeeRoutes = [
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
  {path:'/profile',component: Profile},
]

if(employeeToken){
  tokenHandler({type:'setHeader',header:'employee-token',token: employeeToken})
  pages = EmployeeRoutes
}else if(branchToken){
  tokenHandler({type:'setHeader',header: 'branch-token',token: branchToken})
  pages = BranchRoutes
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
