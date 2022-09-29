import { makeStyles, ThemeOptions } from '@material-ui/core'
import classNames from 'classnames'
import { HTMLProps } from 'react'

const useStyles = makeStyles(
  (theme: ThemeOptions) => ({
    root: {
      width: '100%',
      display: 'flex',
      height: '40px',
      border: `1px solid ${theme.inputContainer?.borderColor}`,
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: '3px',

      '& input': {
        width: '100%',
        height: '40px',
        border: 'none',
        outline: 'none',
        fontSize: '14px',
        marginLeft: '10px'
      },

      '& span': {
        color: theme.inputContainer?.requiredColor,
        marginLeft: '3px',
        fontSize: '13px'
      },

      '&__label': {
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'relative'
      },

      '&:focus-within, &--with-value': {
        '& $labelTitle': {
          color: theme.inputContainer?.labelTitle?.onFocusColor,
          fontWeight: 'bold',
          fontSize: '9px',
          top: '5px'
        },

        '& input': {
          height: '30px',
          marginTop: '10px'
        }
      },

      '&__prefix, &__suffix': {
        background: theme.inputContainer?.prefixAndSuffix?.backgroundColor,
        color: theme.inputContainer?.prefixAndSuffix?.color,
        height: '100%',
        padding: '0 10px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '13px'
      }
    },
    labelTitle: {
      top: '11px',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      fontSize: '13px',
      transition: '0.3s all ease',
      left: '11px',
      color: theme.inputContainer?.labelTitle?.onFocusColor
    }
  }),
  {
    name: 'InputContainer'
  }
)

const InputContainer: React.FC<InputContainerProps> = ({
  onChange,
  label,
  value,
  input,
  prefix,
  suffix,
  isRequired: required
}) => {
  const classes = useStyles()

  return (
    <div
      className={classNames(classes.root, {
        [`${classes.root}--with-value`]: !!value
      })}>
      {!!prefix && <div className={`${classes.root}__prefix`}>{prefix}</div>}

      <label className={`${classes.root}__label`}>
        {!!label && (
          <div className={classes.labelTitle}>
            {label} {required && <span>*</span>}
          </div>
        )}

        <input {...input} onChange={e => onChange(e.target.value)} value={value || ''} />
      </label>

      {!!suffix && <div className={`${classes.root}__suffix`}>{suffix}</div>}
    </div>
  )
}

interface InputContainerProps {
  prefix?: string
  suffix?: string
  label?: string
  value: string | null | undefined
  isRequired?: boolean
  onChange: (value: string) => void
  input?: HTMLProps<HTMLInputElement>
}

export default InputContainer
