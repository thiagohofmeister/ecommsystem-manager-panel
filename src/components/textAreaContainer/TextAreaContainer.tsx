import './TextAreaContainer.scss'

import classNames from 'classnames'
import { HTMLProps } from 'react'

const TextAreaContainer: React.FC<TextAreaContainerProps> = ({
  onChange,
  label,
  value,
  input,
  isRequired: required
}) => {
  return (
    <div
      className={classNames('textarea-container', { 'textarea-container--with-value': !!value })}>
      <label className="textarea-container__label">
        {!!label && (
          <div className="textarea-container__label-title">
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
