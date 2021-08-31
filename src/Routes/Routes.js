import {Route, Switch} from 'react-router'
import { Main, Vote} from '../pages'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Main} />
      <Route exact path={'/vote'} component={Vote} />
    </Switch>
  )
}

export default Routes
