import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
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
                  <Link className="nav-link" to="/">Home Page</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/portfolio">Portfolio Page</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/contact">Contact Page</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
