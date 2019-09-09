import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '../components/grid/Grid'
import CellToFill from '../components/grid/CellToFill'
import CellToSolve from '../components/grid/CellToSolve'
import Cell from '../components/grid/Cell'

function getCellComponent({ solving, interactive }) {
  if (!solving) {
    return CellToFill
  }

  if (!interactive) {
    return Cell
  }

  return CellToSolve
}

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

  const CellComponent = getCellComponent({ solving, interactive })

  return <div>
    <h1>Solve</h1>
    <Grid>
      {grid.map(cell => <CellComponent x={cell.x} y={cell.y} />)}
    </Grid>
    <button onClick={() => setSolving(!solving)} disabled={solved}>{solving && !solved ? 'Stop' : 'Solve'}</button>
    <label>
      <input type='checkbox' checked={interactive} onChange={() => setInteractive(!interactive)} />
      Interactive
    </label>
  </div>
}