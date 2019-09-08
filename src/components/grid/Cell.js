/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useSelector } from 'react-redux'

export default function (props) {
  const { x, y } = props
  const cell = useSelector(state => state.sudoku.grid[x * 9 + y])

  return <div css={css`
    margin: auto;
    font-size: 2em;
    width: 100%;
    height: 100%;
    display: grid;
`}>
    <span css={{ margin: 'auto' }}>{cell.value}</span>
  </div >
}