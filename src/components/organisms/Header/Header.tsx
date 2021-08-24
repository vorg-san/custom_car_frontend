import {Anchor, Button, Sprite} from '../../atoms'
import classes from './Header.module.scss'
import web3 from '../../../web3'
import {useState} from 'react'

const Header = () => {
  const [sidebarActive, setSidebarActive] = useState(false)

  const hamburgIcon = () => {
    const divs = []
    for (let i = 1; i <= 3; i++) {
      divs.push(<div style={{background: 'var(--white)', width: '100%', height: '100%'}} key={i + '-hamburg div'} />)
    }
    return divs
  }

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
          <Sprite id='metamask-icon' width={30} height={30} />
          <Button height={30} onClick={() => console.log(web3)}>
            Connect
          </Button>
        </div>
        <div className={`${classes.hamburg}`} onClick={() => setSidebarActive(!sidebarActive)}>
          {hamburgIcon()}
        </div>
        <div className={`${classes.sidebar} ${!sidebarActive ? classes.inactive : ''}`}>
          <div className={`${classes.sidebarContents}`}>
            <Anchor tag={'sm'} color={'white'}>
              Home
            </Anchor>
            <Anchor tag={'sm'} color={'white'}>
              Rounds
            </Anchor>
            <Anchor tag={'sm'} color={'white'}>
              Style
            </Anchor>
            <Button height={30} onClick={() => console.log(web3)}>
              Connect
            </Button>
          </div>
        </div>
      </div>
      <div className={`${classes.fakeDiv}`} />
    </>
  )
}

export default Header
