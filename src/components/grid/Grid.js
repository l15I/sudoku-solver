/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useSelector } from 'react-redux'
import Cell from './Cell'
import CellToFill from './CellToFill'
import CellToSolve from './CellToSolve'

export default function (props) {
  const grid = useSelector(s => s.grid)
  const state = useSelector(s => s.state)

  return <div css={css`
    display: grid;
    grid-template-columns: ${'4em '.repeat(9)};
    grid-template-rows: ${'4em '.repeat(9)};
    justify-content: center;
  `}>
    {grid.map((cell, idx) => <Cell x={cell.x} y={cell.y} key={idx} >
      {state === 'SOLVE'
        ? <CellToSolve x={cell.x} y={cell.y} />
        : <CellToFill x={cell.x} y={cell.y} />}
    </Cell>)}
  </div>
}