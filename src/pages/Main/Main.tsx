import {withRouter} from 'react-router'
import {Button, Title} from '../../components/atoms'
import classes from './Main.module.scss'
import {Welcome} from './Sections'

const Main = () => {
  return (
    <div className={`${classes.container}`}>
      <img src={'assets/images/Race2Restore.png'} />
      <Welcome />
      <div style={{display: 'flex', alignItems: 'center', gap: '10px', flexDirection: 'column'}}>
        <Title tag={'h1'} racingFont>
          Race on over to the next page to learn the rules!
        </Title>
        <Button
          style={{
            width: 'auto',
            height: 'auto',
          }}
          className={`${classes.button}`}
          onClick={() => window.location.href = '/vote'}
        >
          <span style={{fontFamily: 'Racing Sans One, cursive', fontSize: '32px'}}>Let's GO</span>
          {'>>'}
        </Button>
      </div>
    </div>
  )
}

export default withRouter(Main)
