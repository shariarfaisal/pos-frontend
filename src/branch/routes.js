import Home from './Home'
import Profile from './Profile'
import ExportRequests from './exportRequest/ExportRequests'
import ExportRequest from './exportRequest/ExportRequest'

const routes = [
  {path: '/',component: Home},
  {path: '/profile',component: Profile},
  {path: '/exportRequest',component: ExportRequests},
  {path: '/exportRequest/:requestId',component: ExportRequest},
]

export default routes
