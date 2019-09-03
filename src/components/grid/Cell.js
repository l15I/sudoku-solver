/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useDispatch, useSelector } from 'react-redux'

function getBorderStyle(x, y) {
  return 'border: .1em solid black;'
}

export default function (props) {
  const { x, y } = props
  const dispatch = useDispatch()
  const cell = useSelector(state => state.grid[x * 9 + y])

  const size = '4em'
  const styles = [css`
    min-height: ${size};
    min-width: ${size};
    ${getBorderStyle(x, y)}
  `]
  if (cell.selected) {
    styles.push(css`
      background-color: lime;
    `)
  }

  return <div css={styles}
    onClick={() => dispatch({ type: 'SELECT_CELL', x, y })}
  >
    {cell.value}
  </div>
}