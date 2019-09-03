import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '../components/grid/Grid'

export default function (props) {
  const dispatch = useDispatch()
  dispatch({ type: 'SET_STATE', state: 'SOLVE' })

  const grid = useSelector(s => s.grid)

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'SOLVE_STEP' })
    }, 1000)
    return () => clearInterval(id)
  }, [dispatch, grid])

  return <div>
    <h1>Solve</h1>
    <Grid />
  </div>
}