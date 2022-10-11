import { BrandEditProvider } from 'providers/brand/BrandEditProvider'
import { useParams } from 'react-router-dom'

import PageTitle from '../components/PageTitle'
import BrandSaveForm from './components/BrandSaveForm'

export const BrandSave = () => {
  const { id } = useParams()

  return (
    <div className="save-brand">
      <PageTitle title={id ? 'Editar marca' : 'Cadastro de marcas'} />

      <BrandEditProvider>
        <BrandSaveForm id={id} />
      </BrandEditProvider>
    </div>
  )
}

export default BrandSave
