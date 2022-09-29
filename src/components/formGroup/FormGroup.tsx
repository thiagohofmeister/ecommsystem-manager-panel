import './FormGroup.scss'

import { HTMLProps } from 'react'

const FormGroup: React.FC<FormGroupProps> = ({ children }) => {
  return <div className="form-group">{children}</div>
}

interface FormGroupProps extends HTMLProps<HTMLDivElement> {}

export default FormGroup
