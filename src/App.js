import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sudoku from './pages/Sudoku'
import About from './pages/About'
import Navigation from './components/Navigation'
import Notification from './components/Notification'

export default function App() {
  return <Router>
    <Navigation />
    <Notification />
    <Route path='/' exact component={About} />
    <Route path='/sudoku' component={Sudoku} />
  </Router >
}
