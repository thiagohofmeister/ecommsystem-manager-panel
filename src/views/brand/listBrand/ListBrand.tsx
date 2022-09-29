import './ListBrand.scss'

import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../../../components/button/Button'
import PageTitle from '../../../components/pageTitle/PageTitle'

export const ListBrand = () => {
  const navigation = useNavigate()

  const handleAddBrand = useCallback(() => {
    navigation('/brand/create')
  }, [navigation])

  return (
    <div className="list-brand">
      <PageTitle title="Listagem de marcas">
        <Button
          label="Cadastrar marcas"
          type="create"
          className="list-brand__add"
          onClick={handleAddBrand}
        />
      </PageTitle>
    </div>
  )
}

export default ListBrand
