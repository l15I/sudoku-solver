/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useSelector } from 'react-redux'
import CellToFill from './CellToFill'
import CellToSolve from './CellToSolve'

function getCellBorderStyle(x, y) {
  const style = '.1em solid black'
  const boldStyle = '.2em solid black'
  return `
    border-top: ${x % 3 === 0 ? boldStyle : style};
    border-left ${y % 3 === 0 ? boldStyle : style};
    ${ x === 8 ? `border-bottom: ${boldStyle};` : ''}
    ${ y === 8 ? `border-right: ${boldStyle};` : ''}
  `
}

export default function (props) {
  const grid = useSelector(s => s.sudoku.grid)

  const cellSize = '4em'

  return <div css={css`
    display: grid;
    grid-template-columns: ${`${cellSize} `.repeat(9)};
    grid-template-rows: ${`${cellSize} `.repeat(9)};
    justify-content: center;
  `}>
    {grid.map((cell, idx) => <div
      key={idx}
      css={css`
      height: ${cellSize};
      width: ${cellSize};
      display: grid;
      ${getCellBorderStyle(cell.x, cell.y)}
    `}
    >
      {props.solving
        ? <CellToSolve x={cell.x} y={cell.y} />
        : <CellToFill x={cell.x} y={cell.y} />}
    </div>)}
  </div>
}