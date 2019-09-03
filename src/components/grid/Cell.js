/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useDispatch, useSelector } from 'react-redux'

function getBorderStyle(x, y) {
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
  const { x, y } = props
  const dispatch = useDispatch()
  const cell = useSelector(state => state.grid[x * 9 + y])

  const size = '4em'
  const styles = [css`
    min-height: ${size};
    min-width: ${size};
    display: grid;
    ${getBorderStyle(x, y)}
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
    <span css={css`margin: auto; font-size: 2em;`}>{cell.value}</span>
  </div>
}