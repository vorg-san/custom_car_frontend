import {ButtonProps} from './ButtonProps'
import classes from './Button.module.scss'

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      style={{height: props.height || '40px', width: props.width || '120px', ...props.style}}
      onClick={props.onClick}
      id={props.id}
    >
      {props.children}
    </button>
  )
}

export default Button
