import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '../components/grid/Grid'

export default function (props) {
  const dispatch = useDispatch()
  const grid = useSelector(s => s.grid)
  const [solving, setSolving] = useState(false)

  useEffect(() => {
    if (!solving) {
      const listener = evt => {
        const { key } = evt
        if (key === 'Delete') {
          dispatch({ type: 'CLEAN_CELL' })
        } else {
          const value = Number(key)
          if (!isNaN(value)) {
            dispatch({ type: 'FILL_CELL', value })
          }
        }
      }
      document.addEventListener('keyup', listener)
      return () => document.removeEventListener('keyup', listener)
    }
  }, [dispatch, solving])

  useEffect(() => {
    if (solving) {
      // TODO: implement interface to [ change | switch off ] delay
      if (grid.filter(cell => !cell.value).length > 0) {
        const id = setTimeout(() => {
          dispatch({ type: 'SOLVE_ONE_STEP' })
        }, 1000)
        return () => clearTimeout(id)
      }
    }
  }, [dispatch, grid, solving])

  return <div>
    <h1>Solve</h1>
    <Grid solving={solving} />
    <button onClick={() => setSolving(!solving)}>{solving ? 'Stop' : 'Solve'}</button>
  </div>
}