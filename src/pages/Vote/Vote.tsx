import {withRouter} from 'react-router'
import {Statistics, VotingRules} from './Sections'
import classes from './Vote.module.scss'
import {Button} from '../../components/atoms'

const Home = () => {
  return (
    <div className={`${classes.container}`}>
      <img src={'assets/images/Race2Restore.png'} />
      <Statistics />
      <VotingRules />
      <Button
        style={{
          width: 'auto',
          height: 'auto',
        }}
        className={`${classes.button}`}
      >
        <span style={{fontFamily: 'Racing Sans One, cursive', fontSize: '32px'}}>Let's GO</span>
        {'>>'}
      </Button>
    </div>
  )
}

export default withRouter(Home)
