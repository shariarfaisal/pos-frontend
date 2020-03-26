import Home from './Home'
import Employee from './employee/Index'
import EmployeeTypes from './employee/Types'
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
import Imports from './import/Imports'
import Import from './import/Import'
import CreateImport from './product/CreateImport'

const access = {
    "employeeType": "rwud",
    "employee": "rwud",
    "category": "rwud",
    "product": "rwud",
    "item": "rwud",
    "subItem": "rwud",
    "branch": "rwud",
    "import": "rwud",
    "refund": "rwud",
    "export": "rwud",
    "exportReturn": "rwud",
    "vendor": "rwud",
    "sale": "rwud",
    "customer": "rwud",
    "brand": "rwud",
    "order": "rwud",
    "review": "rwud"
}

const routes = [
  {name: ['home','r'],path: '/',component: Home},
  {name: ['employee','r'],path: '/employee',component: Employee},
  {name: ['employeeType','r'],path: '/employee/type',component: EmployeeTypes},
  {name: ['employeeType','r'],path: '/employee/type/:typeId',component: EmployeeType},
  {name: ['employee','w'],path:'/employee/create',component: EmployeeCreate},
  {name: ['category','r'],path:'/category',component: Category},
  {name: ['product','r'],path:'/category/:catId',component: Products},
  {name: ['item','r'],path:'/category/:catId/:proId',component: Product},
  {name: ['import','w'],path:'/category/:catId/:proId/:itemId/import/:importId',component: CreateImport},
  {name: ['subItem','r'],path:'/category/:catId/:proId/:itemId',component: Item},
  {name: ['vendor','r'],path:'/vendor',component: Vendors},
  {name: ['brand','r'],path:'/brand',component: Brands},
  {name: ['branch','r'],path:'/branch',component: Branches},
  {name: ['profile','r'],path:'/profile',component: Profile},
  {name: ['import','r'],path:'/import',component: Imports},
  {name: ['import','r'],path:'/import/:importId',component: Import},
]

export default routes
