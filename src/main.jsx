import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/style.scss'
import { initFirebas } from './firebase/config'

initFirebas()

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
