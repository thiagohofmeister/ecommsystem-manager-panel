import './InputContainer.scss'

import classNames from 'classnames'
import { HTMLProps } from 'react'

const InputContainer: React.FC<InputContainerProps> = ({
  onChange,
  label,
  value,
  input,
  prefix,
  suffix,
  isRequired: required
}) => {
  return (
    <div className={classNames('input-container', { 'input-container--with-value': !!value })}>
      {!!prefix && <div className="input-container__prefix">{prefix}</div>}

      <label className="input-container__label">
        {!!label && (
          <div className="input-container__label-title">
            {label} {required && <span>*</span>}
          </div>
        )}

        <input {...input} onChange={e => onChange(e.target.value)} value={value || ''} />
      </label>

      {!!suffix && <div className="input-container__suffix">{suffix}</div>}
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
