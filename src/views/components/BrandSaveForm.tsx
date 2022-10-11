import Form from 'components/Form/Form'
import FormGroup from 'components/FormGroup'
import InputContainer from 'components/InputContainer'
import TextAreaContainer from 'components/TextAreaContainer'
import { useBrandSave } from 'hooks/useBrandSave'
import { Brand } from 'models/Brand'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useBrandData } from './brand/useBrandData'

const BrandSaveForm: React.FC<BrandSaveFormProps> = ({ id }) => {
  const navigation = useNavigate()

  const { mutateAsync } = useBrandSave(id, {
    onSuccess: () => {
      navigation('/brand/list')
    }
  })
  const { controllers } = useBrandData()

  const [data, setData] = useState<Brand>({
    description: '',
    label: '',
    urn: ''
  })

  const onCancel = useCallback(() => {
    navigation('/brand/list')
  }, [navigation])

  return (
    <Form
      onSubmit={() => mutateAsync(data)}
      btnSubmitLabel={id ? 'Atualizar' : 'Cadastrar'}
      onCancel={onCancel}>
      <FormGroup>
        <InputContainer label="Label" controller={controllers.label} />

        <InputContainer label="Urn" controller={controllers.urn} value={data?.urn} />
      </FormGroup>

      <TextAreaContainer
        label="Descrição"
        controller={controllers.description}
        value={data?.description}
      />
    </Form>
  )
}

interface BrandSaveFormProps {
  id?: string
}

export default BrandSaveForm
