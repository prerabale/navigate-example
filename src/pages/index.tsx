import React, { useCallback } from 'react'
import { navigateTo } from 'src/lib/router'

const Index: React.FC = () => {
  const handlePropsClick = useCallback(() => {
    navigateTo({
      url: "/props",
      query: {
        id: 1,
        show: false
      }
    })
  }, [])

  const handleRouterClick = useCallback(() => {
    navigateTo({
      url: "/router",
      query: {
        id: 1
      }
    })
  }, [])

  return <div>
    <ul>
      <li onClick={handlePropsClick}>props</li>
      <li onClick={handleRouterClick}>router</li>
    </ul>
  </div>
}

export default Index
