import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import {TodoList} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoList />
  </StrictMode>
)
