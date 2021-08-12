import {Route, Switch} from 'react-router'
import {Home} from '../pages'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
    </Switch>
  )
}

export default Routes
