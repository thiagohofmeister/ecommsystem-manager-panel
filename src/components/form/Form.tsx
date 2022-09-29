import './Form.scss'

import { HTMLProps, useCallback } from 'react'

import Button from '../button/Button'

const Form: React.FC<FormProps> = ({ onSubmit, btnSubmitLabel, onCancel, ...props }) => {
  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault()

      console.log('submit')
      onSubmit && onSubmit(e)
    },
    [onSubmit]
  )

  return (
    <form {...props} onSubmit={handleSubmit} className="form">
      {props.children}

      <div className="form__actions">
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
