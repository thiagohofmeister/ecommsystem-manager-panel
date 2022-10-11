import { Box } from '@material-ui/core'
import { FC, PropsWithChildren } from 'react'

import { BrandGetListResponse } from '../../services/api/brand/models/BrandGetListResponse'
import { TableRowProvider, TableRowProviderProps } from '../TableRowProvider'

export const BrandRowProvider: FC<BrandRowProviderProps> = ({ children, item: brand }) => {
  // const { open } = useModal()
  // const { mutateAsync: deleteBrand, isLoading } = useDeleteBrand()

  // const handleDelete = useCallback(
  //   (id: string) => {
  //     open(DeleteBrandModal, {
  //       onDelete: () => deleteBrand(id)
  //     })
  //   },
  //   [open, deleteBrand]
  // )

  return (
    <TableRowProvider
      columns={[
        {
          data: (
            <Box display="flex" alignItems="center" gridGap={15}>
              <span>{brand.label}</span>
            </Box>
          )
        },
        {
          data: (
            <Box display="flex" alignItems="center" gridGap={15}>
              <span>{brand.urn}</span>
            </Box>
          )
        }
      ]}
      actions={{
        EDIT: {
          link: `/brand/edit/${brand.id}`
        }
      }}
      isLoading={false}>
      {children}
    </TableRowProvider>
  )
}

type BrandRowProviderProps = TableRowProviderProps<BrandGetListResponse> & PropsWithChildren
