import { makeStyles, ThemeOptions } from '@material-ui/core'
import classNames from 'classnames'
import { ButtonHTMLAttributes } from 'react'

const useStyles = makeStyles(
  (theme: ThemeOptions) => ({
    button: {
      display: 'flex',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '12px',
      borderRadius: '3px',
      padding: '10px',
      justifyContent: 'center',

      '&--create': {
        ...theme.button?.create,
        fontWeight: 'bold'
      },

      '&--save': {
        ...theme.button?.save,
        fontWeight: 'bold'
      },

      '&--cancel': {
        ...theme.button?.cancel
      }
    }
  }),
  {
    name: 'Button'
  }
)

const Button: React.FC<ButtonProps> = ({ label, type, ...props }) => {
  const classes = useStyles()

  return (
    <button
      {...props}
      className={classNames(classes.button, props.className, {
        [`${classes.button}--${type}`]: !!type
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
