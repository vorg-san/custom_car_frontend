import {Route, Switch} from 'react-router'
import {Main, Home, Vote} from '../pages'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/main'} component={Main} />
      <Route exact path={'/vote'} component={Vote} />
    </Switch>
  )
}

export default Routes
