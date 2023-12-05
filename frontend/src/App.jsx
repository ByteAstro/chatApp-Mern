import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Button } from '@chakra-ui/react'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'
import axios from 'axios'

const ENDPOINT = import.meta.env.VITE_ENDOPINT;
axios.defaults.baseURL = ENDPOINT;

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/chats' Component={ChatPage} />
      </Routes>
    </div>
  )
}

export default App
