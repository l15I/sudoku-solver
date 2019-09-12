/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '../components/grid/Grid'
import CellToFill from '../components/grid/CellToFill'
import CellToSolve from '../components/grid/CellToSolve'
import Cell from '../components/grid/Cell'
import LinkButton from '../components/base/LinkButton'
import Button from '../components/base/Button'

export default function () {
  const dispatch = useDispatch()
  const grid = useSelector(s => s.sudoku.grid)
  const status = useSelector(s => s.sudoku.status)
  const [interactive, setInteractive] = useState(true)

  const solve = useCallback(
    () => dispatch({ type: interactive ? 'SOLVE_ONE_STEP' : 'SOLVE' }),
    [dispatch, interactive]
  )
  const reset = useCallback(
    () => dispatch({ type: 'RESET' }),
    [dispatch]
  )
  const fillFromWiki = useCallback(
    () => dispatch({ type: 'FILL_FROM_WIKI' }),
    [dispatch]
  )

  useEffect(() => {
    if (status === 'fill') {
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
  }, [dispatch, status])

  useEffect(() => {
    if (interactive && status === 'solving') {
      const id = setInterval(() => dispatch({ type: 'SOLVE_ONE_STEP' }), 1000)
      if (status === 'end') {
        clearInterval(id)
      }
      return () => clearInterval(id)
    }
  }, [dispatch, interactive, status])

  const CellComponent = getCellComponent(status)

  return <div>
    <Grid>
      {grid.map(cell => <CellComponent key={`${cell.x}${cell.y}`} x={cell.x} y={cell.y} />)}
    </Grid>
    <div css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}>
      <div>
        <LinkButton onClick={reset}>Reset</LinkButton>
        <LinkButton onClick={fillFromWiki}>Fill example from wikipedia</LinkButton>
      </div>
      <Button onClick={solve} disabled={status === 'end'}>
        {status === 'solving' ? 'Stop' : 'Solve'}
      </Button>
      <label css={{ paddingTop: '.5em', cursor: 'pointer' }}>
        <input type='checkbox' checked={interactive} onChange={() => setInteractive(!interactive)}
          css={{ margin: '.5em' }} />
        <span css={{ fontStyle: 'italic' }}>interactive</span>
      </label>
    </div>
  </div >

  function getCellComponent(status) {
    switch (status) {
      case 'fill':
        return CellToFill
      case 'solving':
        return CellToSolve
      default:
        return Cell
    }
  }

}