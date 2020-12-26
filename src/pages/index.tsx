import React, { MouseEventHandler, useCallback, useReducer } from 'react'
import { navigateTo } from 'src/lib/router'

const reducer = (state, action) => {

}

const Index: React.FC = () => {
  const dispatch = useReducer(reducer, undefined)
  const handleClick = useCallback((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { page } = event.currentTarget.dataset
    navigateTo({
      url: page
    })
  }, [])

  return <div>
    <ul>
      <li data-page={'props'} onClick={handleClick}>props</li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
}

export default Index
