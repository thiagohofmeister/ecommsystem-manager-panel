import { makeStyles } from '@material-ui/core'
import { HTMLProps, useCallback } from 'react'

import Button from './Button'

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',

    '& > *:not(:last-child)': {
      marginBottom: '20px'
    },

    '&__actions': {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '15px'
    }
  }
}))

const Form: React.FC<FormProps> = ({ onSubmit, btnSubmitLabel, onCancel, ...props }) => {
  const classes = useStyles()

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault()

      onSubmit && onSubmit(e)
    },
    [onSubmit]
  )

  return (
    <form {...props} onSubmit={handleSubmit} className={classes.form}>
      {props.children}

      <div className={`${classes.form}__actions`}>
        {!!onCancel && <Button label="Cancelar" type="cancel" onClick={onCancel} />}
        <Button label={btnSubmitLabel} type="save" />
      </div>
    </form>
  )
}

interface FormProps extends HTMLProps<HTMLFormElement> {
  btnSubmitLabel: string
  onCancel?: () => void
}

export default Form
