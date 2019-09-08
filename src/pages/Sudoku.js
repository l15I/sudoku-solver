import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '../components/grid/Grid'

export default function (props) {
  const dispatch = useDispatch()
  const { grid, solved } = useSelector(s => s.sudoku)
  const [solving, setSolving] = useState(false)
  const [interactive, setInteractive] = useState(true)

  useEffect(() => {
    if (!solving && !solved) {
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
  }, [dispatch, solved, solving])

  useEffect(() => {
    if (solving && !solved) {
      if (interactive) {
        const id = setTimeout(() => dispatch({ type: 'SOLVE_ONE_STEP' }), 1000)
        return () => clearTimeout(id)
      }
      dispatch({ type: 'SOLVE' })
    }
  }, [dispatch, grid, interactive, solved, solving])

  return <div>
    <h1>Solve</h1>
    <Grid solving={solving} interactive={interactive} />
    <button onClick={() => setSolving(!solving)} disabled={solved}>{solving && !solved ? 'Stop' : 'Solve'}</button>
    <label>
      <input type='checkbox' checked={interactive} onChange={() => setInteractive(!interactive)} />
      Interactive
    </label>
  </div>
}