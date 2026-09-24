import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className="text-3xl font-bold text-red-500
       bg-gray-200 p-4 mb-4 rounded-xl">
      Hello Tailwind
        <Card username="Aryvan" btnText="Visit Profile" />
        <Card username="iphone" btnText="Visit Profile" />
    </h1>

    </>
  )

}

export default App
