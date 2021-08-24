import {SpriteProps} from './SpriteProps'
import sprite from './svgs/icons.svg'

const Sprite = (props: SpriteProps) => {
  return (
    <svg
      viewBox={`0 0 ${props.width} ${props.height}`}
      width={`${props.width}px`}
      height={`${props.height}px`}
      style={{...props.style}}
      onClick={props.onClick}
      className={`${props.className}`}
      id={props.elementId}
    >
      <use href={`${sprite}#${props.id}`} />
    </svg>
  )
}

export default Sprite
