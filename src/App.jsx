import { useState } from 'react'
import './App.css'
import Chat from './Chat'
import Login from './Login'

function App() {
  const [isConnected, setIsConnected] = useState(false)
  return (
    <div>
      <h1>WebSocket</h1>
      <div>
        {isConnected ?<Chat/> : <Login setIsConnected={setIsConnected} /> }
      </div>
    </div>
  )
}

export default App
