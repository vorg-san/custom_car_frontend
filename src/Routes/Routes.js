import {Route, Switch} from 'react-router'
import {Main, Home} from '../pages'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/main'} component={Main} />
    </Switch>
  )
}

export default Routes
