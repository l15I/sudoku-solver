/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useDispatch, useSelector } from 'react-redux'

function getBorderStyle(x, y) {
  const style = '.1em solid black'
  return `
    border-top: ${style};
    border-left ${style};
    ${ x === 8 ? `border-bottom: ${style};` : ''}
    ${ y === 8 ? `border-right: ${style};` : ''}
  `
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