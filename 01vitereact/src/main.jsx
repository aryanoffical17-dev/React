import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>MyApp</h1>
    </div>
  )
}

const anotherUser ="chai biskut"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',target  : '_blank'},
  'Google',
  anotherUser
)


createRoot(document.getElementById('root')).render(

  <StrictMode>
    {/* <App /> */}
    {reactElement}
  </StrictMode>

)
