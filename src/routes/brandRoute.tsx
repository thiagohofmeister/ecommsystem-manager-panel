import BrandList from 'views/BrandList'
import BrandSave from 'views/BrandSave'

const brandRoute = {
  path: '/brand',
  label: 'Marcas',
  items: {
    create: { label: 'Cadastro de marca', path: '/brand/create', component: <BrandSave /> },
    edit: { label: 'Edição de marca', path: '/brand/edit/:id', component: <BrandSave /> },
    list: { label: 'Listagem de marca', path: '/brand/list', component: <BrandList /> }
  }
}

export default brandRoute
