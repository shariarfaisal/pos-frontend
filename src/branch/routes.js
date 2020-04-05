import Home from './Home'
import Profile from './Profile'
import Store from './store/Store'
import StoreProducts from './store/Products'
import StoreItems from './store/Items'
import StoreSubItems from './store/SubItems'
import WishList from './wishlist/WishList'
import ExportRequests from './exportRequest/ExportRequests'
import ExportRequest from './exportRequest/ExportRequest'

const routes = [
  {path: '/',component: Home},
  {path: '/profile',component: Profile},
  {path: '/store',component: Store},
  {path: '/store/:catId',component: StoreProducts},
  {path: '/store/:catId/:proId',component: StoreItems},
  {path: '/store/:catId/:proId/:itemId',component: StoreSubItems},
  {path: '/exportRequest',component: ExportRequests},
  {path: '/wishlist',component: WishList},
  {path: '/exportRequest/:requestId',component: ExportRequest},
]

export default routes
