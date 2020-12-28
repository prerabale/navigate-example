import React from "react"

export const ROUTE_MAP = {
  '/': React.lazy(() => import('./pages/index')),
  '/props': React.lazy(() => import('./pages/props')),
  '/router': React.lazy(() => import('./pages/router'))
}

const routes = Object.entries(ROUTE_MAP).map(([path, component]) => {
  return {
    path,
    component
  }
})

export default routes
