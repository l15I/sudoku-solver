/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useSelector, useDispatch } from 'react-redux'

export default function (props) {
  const { x, y } = props
  const dispatch = useDispatch()
  const cell = useSelector(state => state.sudoku.grid[x * 9 + y])

  const styles = [css`
    margin: auto;
    font-size: 2em;
    width: 100%;
    height: 100%;
    display: grid;
    cursor: pointer;
  `]
  if (cell.selected) {
    styles.push(css`
      background-color: lime;
    `)
  }

  return <div
    css={styles}
    onClick={() => dispatch({ type: 'SELECT_CELL', x, y })}
  >
    <span css={{ margin: 'auto' }}>{cell.value}</span>
  </div >
}