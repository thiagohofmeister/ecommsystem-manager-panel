import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../components/Button'
import List from '../components/List'
import PageTitle from '../components/PageTitle'
import { useBrandGetList } from '../hooks/useBrandGetList'
import { BrandTableProvider } from '../providers/brand/BrandTableProvider'

export const BrandList = () => {
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

      <List query={useBrandGetList} tableProvider={BrandTableProvider} />
    </div>
  )
}

export default BrandList
