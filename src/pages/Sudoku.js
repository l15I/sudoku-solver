/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '../components/grid/Grid'
import CellToFill from '../components/grid/CellToFill'
import CellToSolve from '../components/grid/CellToSolve'
import Cell from '../components/grid/Cell'
import LinkButton from '../components/base/LinkButton'
import Button from '../components/base/Button'

function getCellComponent({ solving, interactive }) {
  if (!solving) {
    return CellToFill
  }

  if (!interactive) {
    return Cell
  }

  return CellToSolve
}

export default function () {
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
    <Grid>
      {grid.map(cell => <CellComponent x={cell.x} y={cell.y} />)}
    </Grid>
    <div css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}>
      <div>
        <LinkButton onClick={() => dispatch({ type: 'RESET' })}>
          Reset
        </LinkButton>
        <LinkButton onClick={() => dispatch({ type: 'FILL_FROM_WIKI' })}>
          Fill example from wikipedia
        </LinkButton>
      </div>
      <Button onClick={() => setSolving(!solving)} disabled={solved}>{solving ? 'Stop' : 'Solve'}</Button>
      <label css={{ paddingTop: '.5em', cursor: 'pointer' }}>
        <input type='checkbox' checked={interactive} onChange={() => setInteractive(!interactive)}
          css={{ margin: '.5em' }} />
        <span css={{ fontStyle: 'italic' }}>interactive</span>
      </label>
    </div>
  </div >
}