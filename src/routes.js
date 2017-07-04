import Stage from './components/stage/Stage'
import TripList from './components/tripList/TripList'
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import TripSummary from './components/tripSummary/TripSummary'

const routes = [
  {
    path: '/',
    component: TripList
  },
  {
    path: '/stage',
    component: Stage
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
  },
  {
    path: '/tripsummary',
    component: TripSummary
  }
]

export default routes
