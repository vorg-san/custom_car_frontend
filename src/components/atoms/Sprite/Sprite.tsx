import {SpriteProps} from './SpriteProps'
import sprite from './svgs/icons.svg'

const Sprite = (props: SpriteProps) => {
  return (
    <svg
      viewBox={`0 0 ${props.width} ${props.height}`}
      width={props.width}
      height={props.height}
      style={{...props.style}}
      onClick={props.onClick}
      className={`${props.className || ''}`}
      id={props.elementId}
    >
      <use href={`${sprite}#${props.id}`}></use>
    </svg>
  )
}

export default Sprite
