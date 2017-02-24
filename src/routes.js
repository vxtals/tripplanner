import NewStage from './components/newStage/NewStage'
import TripList from './components/tripList/TripList'

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
  }
]

export default routes
