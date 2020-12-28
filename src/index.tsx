import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

if (module.hot) {
  module.hot.accept()
}
console.log('react:', React)

ReactDOM.render(<App />, document.getElementById('app'))
