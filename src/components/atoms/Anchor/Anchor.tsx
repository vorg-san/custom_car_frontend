import {AnchorProps} from './AnchorProps'
import classes from './Anchor.module.scss'

const Anchor = (props: AnchorProps) => {
  return (
    <a
      href={props.href || 'javascript:void(0)'}
      target={props.openInNewTab ? '_blank' : undefined}
      rel={'noopener noreferrer'}
      onClick={props.onClick}
      className={`${classes.anchor} ${props.className} ${props.primary ? classes.primary : ''}`}
      style={{
        fontWeight: props.weight === 'bold' ? 'bold' : props.weight === 'normal' ? 'normal' : 'inherit',
        fontSize:
          props.tag === 'xl'
            ? '40px'
            : props.tag === 'lg'
            ? '32px'
            : props.tag === 'md'
            ? '24px'
            : props.tag === 'sm'
            ? '18px'
            : props.tag === 'xs'
            ? '14px'
            : '12px',
        color: props.color || 'inherit',
        ...props.style,
      }}
    >
      {props.children}
    </a>
  )
}

export default Anchor
