import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Solve from './components/Solve'
import Fill from './components/Fill'
import About from './components/About'
import { setPage } from './redux/actions'

function getPageComponent(page) {
  switch (page) {
    case 'FILL':
      return <Fill />
    case 'SOLVE':
      return <Solve />
    default:
      return <About />
  }
}

export default function App() {
  const page = useSelector(state => state.page)
  const dispatch = useDispatch()

  return <div>
    <header>
      <button onClick={() => dispatch(setPage('FILL'))}>New</button>
      <button onClick={() => dispatch(setPage('ABOUT'))}>About</button>
    </header>
    {getPageComponent(page)}
  </div >
}
