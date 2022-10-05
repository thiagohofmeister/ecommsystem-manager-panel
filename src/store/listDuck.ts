import { Reducer } from 'react'
import { useDispatch } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { useSelector } from '../hooks/useSelector'
import { DefaultQueryParams } from '../services/api/models/QueryParams'
import { QueryParamsFilter } from '../services/api/models/QueryParamsFilter'

const INITIAL_STATE: IListState = {
  filters: {},
  params: {}
}

export enum ListTypes {
  SET_PAGINATION = '@list/SET_PAGINATION'
}

const setPagination = (pagination: { page?: number; size?: number }): IListAction => ({
  type: ListTypes.SET_PAGINATION,
  pagination
})

export const reducer: Reducer<IListState, IListAction> = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case ListTypes.SET_PAGINATION:
      return {
        ...currentState,
        params: {
          ...currentState.params,
          page: action.pagination.page === 1 ? undefined : action.pagination.page,
          size: action.pagination.size === 15 ? undefined : action.pagination.size
        }
      }

    default:
      return currentState
  }
}

interface IListState {
  params: DefaultQueryParams
  filters: QueryParamsFilter
}

export type IListAction = {
  type: ListTypes.SET_PAGINATION
  pagination: {
    page?: number
    size?: number
  }
}

type ListDispatch = Dispatch<Partial<IListState> & Action<ListTypes>>

const actions = {
  setPagination
}

export const useListState = () => useSelector<IListState>('list')
export const useListActions = () => ({
  listActions: actions,
  dispatch: useDispatch<ListDispatch>()
})
