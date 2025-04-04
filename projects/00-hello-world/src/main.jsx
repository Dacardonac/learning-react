import React from 'react'
import { createRoot } from 'react-dom/client'
import {App} from '../src/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <App />
)