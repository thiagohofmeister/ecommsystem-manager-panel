import { makeStyles } from '@material-ui/core'
import { useEffect } from 'react'
import { UseQueryOptions, UseQueryResult } from 'react-query'

import { ListResponse } from '../services/api/models/ListResponse'
import { DefaultQueryParams } from '../services/api/models/QueryParams'
import { QueryParamsFilter } from '../services/api/models/QueryParamsFilter'
import { useListActions, useListState } from '../store/listDuck'
import Table from './Table'

const useStyles = makeStyles(
  {
    root: {}
  },
  {
    name: 'List'
  }
)

const List: React.FC<ListProps> = props => {
  const classes = useStyles()
  const listState = useListState()
  const { listActions, dispatch } = useListActions()

  const query = props.query(listState, {
    onSuccess: result => props.onLoadData?.(result.items)
  })

  useEffect(() => {
    if (!query.data?.items.length && !!query.data?.total && !!listState.params.page) {
      dispatch(listActions.setPagination({ page: listState.params.page - 1 }))
    }
  }, [query.data, listState, listActions, dispatch])

  return (
    <div className={classes.root}>
      <Table gridTemplateColumns={props.gridTemplateColumns}></Table>
    </div>
  )
}

interface ListProps<Item = any> {
  query: (
    queryParams: { filters?: QueryParamsFilter; params?: DefaultQueryParams },
    options?: UseQueryOptions<ListResponse<Item>>
  ) => UseQueryResult<ListResponse<Item>>
  onEmptyData?: JSX.Element
  onLoadData?: (items: Item[]) => void
  gridTemplateColumns: string
}

export default List
