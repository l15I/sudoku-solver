import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Solve from './pages/Solve'
import Fill from './pages/Fill'
import About from './pages/About'

export default function App() {
  return <Router>
    <nav>
      <Link to='/'>new</Link>
      <Link to='about'>about</Link>
    </nav>
    <Route path='/' exact component={Fill} />
    <Route path='/about' component={About} />
    <Route path='/solve' component={Solve} />
  </Router >
}
