import {TitleProps} from './TitleProps'
import classes from './Title.module.scss'

const Title = (props: TitleProps) => {
  switch (props.tag) {
    case 'h1':
      return (
        <h1
          style={{...props.style}}
          className={`${props.className} ${props.racingFont ? classes.racingFont : ''}`}
          id={props.id || ''}
        >
          {props.children}
        </h1>
      )
    case 'h2':
      return (
        <h2
          style={{...props.style}}
          className={`${props.className} ${props.racingFont ? classes.racingFont : ''}`}
          id={props.id || ''}
        >
          {props.children}
        </h2>
      )
    case 'h3':
      return (
        <h3
          style={{...props.style}}
          className={`${props.className} ${props.racingFont ? classes.racingFont : ''}`}
          id={props.id || ''}
        >
          {props.children}
        </h3>
      )
    case 'h4':
      return (
        <h4
          style={{...props.style}}
          className={`${props.className} ${props.racingFont ? classes.racingFont : ''}`}
          id={props.id || ''}
        >
          {props.children}
        </h4>
      )
    case 'h5':
      return (
        <h5
          style={{...props.style}}
          className={`${props.className} ${props.racingFont ? classes.racingFont : ''}`}
          id={props.id || ''}
        >
          {props.children}
        </h5>
      )
    case 'h6':
      return (
        <h6
          style={{...props.style}}
          className={`${props.className} ${props.racingFont ? classes.racingFont : ''}`}
          id={props.id || ''}
        >
          {props.children}
        </h6>
      )
    default:
      return (
        <h3
          style={{...props.style}}
          className={`${props.className} ${props.racingFont ? classes.racingFont : ''}`}
          id={props.id || ''}
        >
          {props.children}
        </h3>
      )
  }
}

export default Title
