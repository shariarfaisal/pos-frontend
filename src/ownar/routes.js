import Home from './Home'
import Employee from './employee/Index'
import EmployeeTypes from './employee/Types'
import EmployeeType from './employee/Type'
import EmployeeCreate from './employee/Create'
import Category from './category/Category'
import Products from './product/Products'
import Product from './product/Product'
import Item from './product/Item'
import SubItem from './product/SubItem'
import Vendors from './vendor/Vendors'
import Brands from './brand/Brands'
import Brand from './brand/Brand'
import Branches from './branch/Branches'
import Profile from './profile/Profile'
import Imports from './import/Imports'
import Import from './import/Import'
import CreateImport from './product/CreateImport'
import ExportRequests from './export/Requests'
import ExportRequest from './export/Request'

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
  {name: ['categories','r'],path:'/category',component: Category},
  {name: ['category','r'],path:'/category/:catId',component: Products},
  {name: ['product','r'],path:'/category/:catId/:proId',component: Product},
  {name: ['import','w'],path:'/category/:catId/:proId/:itemId/import/:importId',component: CreateImport},
  {name: ['item','r'],path:'/category/:catId/:proId/:itemId',component: Item},
  {name: ['subItem','r'],path:'/category/:catId/:proId/:itemId/:subItemId',component: SubItem},
  {name: ['vendor','r'],path:'/vendor',component: Vendors},
  {name: ['brand','r'],path:'/brand',component: Brands},
  {name: ['brand','r'],path:'/brand/:brandId',component: Brand},
  {name: ['branch','r'],path:'/branch',component: Branches},
  {name: ['profile','r'],path:'/profile',component: Profile},
  {name: ['import','r'],path:'/import',component: Imports},
  {name: ['import','r'],path:'/import/:importId',component: Import},
  {name: ['exportRequest','r'],path:'/export/requests',component: ExportRequests},
  {name: ['exportRequest','r'],path:'/export/requests/:reqId',component: ExportRequest},
]

export default routes
