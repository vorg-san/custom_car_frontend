import {Route, Switch} from 'react-router'
import { Home, Vote} from '../pages'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/vote'} component={Vote} />
    </Switch>
  )
}

export default Routes
