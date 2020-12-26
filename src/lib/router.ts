import qs from 'querystring'

import { LocationState } from 'history'
import { ComponentType } from 'react'
import { RouteComponentProps } from 'react-router'
import history from 'src/history'
import { ROUTE_MAP } from 'src/routes'

type unRouteComponentProps<T> = T extends RouteComponentProps & infer R ? R : T
type unComponentType<T> = T extends ComponentType<infer R> ? R : T
type getComponentProps<T> = unRouteComponentProps<unComponentType<T>>

interface Query<T> {
  query: T
}

interface OptionQuery<T> {
  query?: T
}

type requiredConfig<T> = Record<string, never> extends T ? OptionQuery<T> : Query<T>

type NavigateInfo<K extends keyof typeof ROUTE_MAP,
  T extends getComponentProps<typeof ROUTE_MAP[K]> = getComponentProps<typeof ROUTE_MAP[K]>> = {
  url: K
  state?: LocationState
} & requiredConfig<T>

function isNullOrUndefined (val: any) {
  return val === undefined || val === null
}

export function mergeUrlWithQuery (url: string, query?: Record<string, any> | any): string {
  url = url || ''
  // 防止 url 中有多个 ?
  const pathname = url.split('?')[0]
  const search = url.split('?').slice(1).join('?')

  const searchQuery: Record<string, any> = {
    ...qs.parse(search),
    ...query
  }

  // 避免 url 上出现空字段
  Object.keys(searchQuery).forEach((key) => {
    if (isNullOrUndefined(searchQuery[key])) {
      delete searchQuery[key]
    }
  })

  const queryStr = '?' + qs.stringify(searchQuery)

  return pathname + queryStr
}

export const navigateTo = function <T extends keyof typeof ROUTE_MAP> (info: NavigateInfo<T>): void {
  const {url, state, query = {}} = info
  const finalUrl = mergeUrlWithQuery(url, query)
  history.push(finalUrl, state)
}

export const redirectTo = function <T extends keyof typeof ROUTE_MAP> (info: NavigateInfo<T>): void {
  const {url, state, query} = info
  const finalUrl = mergeUrlWithQuery(url, query)
  history.replace(finalUrl, state)
}

export const navigateBack = function (): void {
  history.goBack()
}
