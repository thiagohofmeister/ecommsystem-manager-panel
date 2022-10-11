import { FormControllerDefault } from 'components/FormController/FormController'
import FormGroup from 'components/FormGroup'
import InputContainer from 'components/InputContainer'
import TextAreaContainer from 'components/TextAreaContainer'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useBrandData } from './brand/useBrandData'

const BrandSaveForm: React.FC<BrandSaveFormProps> = ({ id }) => {
  const navigation = useNavigate()

  const { controllers } = useBrandData()

  return (
    <div>
      <FormGroup>
        <InputContainer label="Label" controller={controllers.label} />

        <InputContainer label="Urn" controller={controllers.urn} />
      </FormGroup>

      <TextAreaContainer label="Descrição" controller={controllers.description} />

      <FormControllerDefault />
    </div>
  )
}

interface BrandSaveFormProps {
  id?: string
}

export default BrandSaveForm
