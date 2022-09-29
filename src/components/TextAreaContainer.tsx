import { makeStyles, ThemeOptions } from '@material-ui/core'
import classNames from 'classnames'
import { HTMLProps } from 'react'

const useStyles = makeStyles(
  (theme: ThemeOptions) => ({
    root: {
      width: '100%',
      display: 'flex',
      height: '130px',
      border: `1px solid ${theme.textAreaContainer?.borderColor}`,
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: '3px',

      '& textarea': {
        width: '100%',
        height: '130px',
        border: 'none',
        outline: 'none',
        fontSize: '14px',
        marginLeft: '10px',
        resize: 'none'
      },

      '& span': {
        color: theme.textAreaContainer?.requiredColor,
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
          color: theme.textAreaContainer?.labelTitle?.onFocusColor,
          fontWeight: 'bold',
          fontSize: '9px',
          top: '5px'
        },
        '& textarea': {
          height: '110px',
          marginTop: '15px'
        }
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
      color: theme.textAreaContainer?.labelTitle?.color
    }
  }),
  {
    name: 'TextAreaContainer'
  }
)

const TextAreaContainer: React.FC<TextAreaContainerProps> = ({
  onChange,
  label,
  value,
  input,
  isRequired: required
}) => {
  const classes = useStyles()

  return (
    <div className={classNames(classes.root, { [`${classes.root}--with-value`]: !!value })}>
      <label className={`${classes.root}__label`}>
        {!!label && (
          <div className={classes.labelTitle}>
            {label} {required && <span>*</span>}
          </div>
        )}

        <textarea {...input} onChange={e => onChange(e.target.value)} value={value || ''} />
      </label>
    </div>
  )
}

interface TextAreaContainerProps {
  label?: string
  value: string | null | undefined
  isRequired?: boolean
  onChange: (value: string) => void
  input?: HTMLProps<HTMLTextAreaElement>
}

export default TextAreaContainer
