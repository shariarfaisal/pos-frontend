import Home from './Home'
import Employee from './employee/Index'
import EmployeeType from './employee/Type'
import EmployeeCreate from './employee/Create'
import Category from './category/Category'
import Products from './product/Products'
import Product from './product/Product'
import Item from './product/Item'
import Vendors from './vendor/Vendors'
import Brands from './brand/Brands'
import Branches from './branch/Branches'
import Profile from './profile/Profile'


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
  {path:'/profile',component: Profile},
]

export default routes
