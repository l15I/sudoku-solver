import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Sudoku from './pages/Sudoku'
import About from './pages/About'

export default function App() {
  return <Router>
    <nav>
      <Link to='/'>about</Link>
      <Link to='/sudoku'>sudoku</Link>
    </nav>
    <Route path='/' exact component={About} />
    <Route path='/sudoku' component={Sudoku} />
  </Router >
}
