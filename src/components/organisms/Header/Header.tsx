import {Anchor, Button, Sprite} from '../../atoms'
import classes from './Header.module.scss'
import web3 from '../../../web3'

const Header = () => {
  return (
    <>
      <div className={`${classes.header}`}>
        <div className={`${classes.links}`}>
          <Anchor tag={'sm'} color={'white'}>
            Home
          </Anchor>
          <Anchor tag={'sm'} color={'white'}>
            Rounds
          </Anchor>
          <Anchor tag={'sm'} color={'white'}>
            Style
          </Anchor>
        </div>
        <div className={`${classes.account}`}>
          <div className={`${classes.login}`}>
            <Sprite id={'login-icon'} width={21} height={21} />
            <Anchor tag={'sm'} color={'white'}>
              Login
            </Anchor>
          </div>
          <Button height={30} onClick={() => console.log(web3)}>Connect</Button>
        </div>
      </div>
      <div className={`${classes.fakeDiv}`} />
    </>
  )
}

export default Header
