import { makeStyles } from '@material-ui/core'
import classNames from 'classnames'
import { useEditContext } from 'providers/EditProvider'
import { HTMLProps, useCallback } from 'react'

import Button from '../Button'
import { useForm } from './useForm'

const useStyles = makeStyles(
  theme => ({
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
  }),
  {
    name: 'Form'
  }
)

const Form: React.FC<FormProps> = ({ onSubmit, btnSubmitLabel, onCancel, ...props }) => {
  const classes = useStyles()
  const { immutableData } = useEditContext()
  const controller = useForm(immutableData)

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault()

      controller.saveChanges()
    },
    [onSubmit]
  )

  return (
    <form {...props} onSubmit={handleSubmit} className={classNames(classes.form, props.className)}>
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
  onSubmit: () => void
  onCancel?: () => void
}

export default Form
