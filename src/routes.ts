import React from "react"

export const ROUTE_MAP = {
  '/': React.lazy(() => import('./pages/index'))
}

const routes = Object.entries(ROUTE_MAP).map(([path, component]) => {
  return {
    path,
    component
  }
})

export default routes
