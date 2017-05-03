import NewStage from './components/newStage/NewStage'
import TripList from './components/tripList/TripList'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'

const routes = [
  {
    path: '/',
    component: TripList
  },
  {
    path: '/newstage',
    component: NewStage
  },
  {
    path: '/triplist',
    component: TripList
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: Signup
  }
]

export default routes
