import React from 'react'
import { Route, Router as BrowserRouter, Switch } from 'react-router-dom'
import history from "./history"
import routes from './routes'

const App: React.FC = () => {
  return <BrowserRouter history={history}>
    <React.Suspense fallback={<div />}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} component={route.component} exact />
        ))}
      </Switch>
    </React.Suspense>
  </BrowserRouter>
}

export default App
