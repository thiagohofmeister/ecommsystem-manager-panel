import Button from 'components/Button'
import List from 'components/List'
import PageContainer from 'components/PageContainer'
import PageContainerTopRight from 'components/PageContainerTopRight'
import { useBrandGetList } from 'hooks/useBrandGetList'
import { BrandTableProvider } from 'providers/brand/BrandTableProvider'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export const BrandList = () => {
  const navigation = useNavigate()

  const handleAddBrand = useCallback(() => {
    navigation('/brand/create')
  }, [navigation])

  return (
    <PageContainer pageTitle="Listagem de marcas">
      <PageContainerTopRight>
        <Button label="Criar marca" type="success" onClick={handleAddBrand} />
      </PageContainerTopRight>

      <List query={useBrandGetList} tableProvider={BrandTableProvider} />
    </PageContainer>
  )
}

export default BrandList
