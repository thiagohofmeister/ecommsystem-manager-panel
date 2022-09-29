import { kebabCase } from 'lodash'
import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Form from '../components/Form'
import FormGroup from '../components/FormGroup'
import InputContainer from '../components/InputContainer'
import PageTitle from '../components/PageTitle'
import TextAreaContainer from '../components/TextAreaContainer'
import { useCreateBrand } from '../hooks/useCreateBrand'
import { Brand } from '../models/Brand'

export const BrandSave = () => {
  const navigation = useNavigate()
  const { mutateAsync } = useCreateBrand({
    onSuccess: () => {
      navigation('/brand/list')
    }
  })
  const [urnByUser, setUrnByUser] = useState<string>('')

  const [data, setData] = useState<Brand>({
    description: '',
    label: '',
    urn: ''
  })

  const onCancel = useCallback(() => {
    navigation('/brand/list')
  }, [navigation])

  return (
    <div className="save-brand">
      <PageTitle title="Cadastro de marcas" />

      <Form onSubmit={() => mutateAsync(data)} btnSubmitLabel="Cadastrar" onCancel={onCancel}>
        <FormGroup>
          <InputContainer
            label="Label"
            onChange={label =>
              setData(prev => ({ ...prev, label, urn: urnByUser || kebabCase(label) }))
            }
            value={data?.label}
            isRequired
          />

          <InputContainer
            label="Urn"
            onChange={urn => {
              setUrnByUser(kebabCase(urn))
              setData(prev => ({ ...prev, urn: kebabCase(urn) }))
            }}
            value={data?.urn}
          />
        </FormGroup>

        <TextAreaContainer
          label="Descrição"
          onChange={description => setData(prev => ({ ...prev, description }))}
          value={data?.description}
        />
      </Form>
    </div>
  )
}

export default BrandSave
