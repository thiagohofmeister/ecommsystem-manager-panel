import './Button.scss'

import classNames from 'classnames'
import { ButtonHTMLAttributes } from 'react'

const Button: React.FC<ButtonProps> = ({ label, type, ...props }) => {
  return (
    <button
      {...props}
      className={classNames('button', props.className, {
        [`button--${type}`]: !!type
      })}>
      {label}
    </button>
  )
}

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'save' | 'create' | 'cancel'
  label: string
}

export default Button
