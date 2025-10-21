import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
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
          <p className="h1">Thomas Wallace</p>
          <p className="h4">Full Stack Developer</p>
        </header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home Page</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/portfolio">Portfolio Page</Link>
                </li>
                <li className="nav-item">
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