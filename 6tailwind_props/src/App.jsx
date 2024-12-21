import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


// Doesn't load on browser as the card code has problem
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username={Ajay}  num="4"/>
      <Card username={Vijay} num="5"/>
    </>
  )
}
export default App
