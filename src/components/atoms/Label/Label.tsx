import {LabelProps} from './LabelProps'

const Label = (props: LabelProps) => {
  return (
    <label
      style={{
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
        fontWeight: props.weight || 'inherit',
        cursor: props.style?.cursor || 'inherit',
        color: props.theme || 'inherit',
        ...props.style,
      }}
      className={`${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </label>
  )
}

export default Label
