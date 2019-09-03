/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useSelector } from 'react-redux'

export default function (props) {
  const { x, y } = props
  const cell = useSelector(state => state.grid[x * 9 + y])

  const styles = [css`
    margin: auto;
    font-size: 2em;
  `]
  if (cell.selected) {
    styles.push(css`
      width: 100%;
      height: 100%;
      display: grid;
      background-color: lime;
    `)
  }

  return <div css={styles}>
    <span css={{ margin: 'auto' }}>{cell.value}</span>
  </div >
}