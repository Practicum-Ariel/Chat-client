import { useState } from 'react'
import './App.css'
import Chat from './Chat'
import Login from './Login'

function App() {
  const [isConnected, setIsConnected] = useState(false)
  const [userName, setUserName] = useState('')
  return (
    <div>
      <h1>WebSocket</h1>
      <div>
        {isConnected ?<Chat userName={userName}/> : <Login setIsConnected={setIsConnected} userName={userName} setUserName ={setUserName} /> }
      </div>
    </div>
  )
}

export default App
