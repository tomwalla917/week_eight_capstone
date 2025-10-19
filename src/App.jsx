import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="header">
        <p class="h1">Thomas Wallace</p>
        <p class="h4">Full Stack Developer</p>
      </header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Home Page</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Portfolio Page</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Page</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default App
