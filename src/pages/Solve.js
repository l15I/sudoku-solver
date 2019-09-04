import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '../components/grid/Grid'

export default function (props) {
  const dispatch = useDispatch()
  dispatch({ type: 'SET_STATE', state: 'SOLVE' })

  const grid = useSelector(s => s.grid)

  useEffect(() => {
    // TODO: implement interface to [ change | switch off ] delay
    if (grid.filter(cell => !cell.value).length > 0) {
      const id = setTimeout(() => {
        dispatch({ type: 'SOLVE_ONE_STEP' })
      }, 1000)
      return () => clearTimeout(id)
    }
  }, [dispatch, grid])

  return <div>
    <h1>Solve</h1>
    <Grid />
  </div>
}