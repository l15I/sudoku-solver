/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useSelector } from 'react-redux'

export default function (props) {
  const { x, y } = props
  const cell = useSelector(state => state.grid[x * 9 + y])

  const styles = [css`
    margin: auto;
    font-size: ${cell.value ? '2em' : '.8em'};
  `]

  return <div css={styles}>
    {cell.value || 'to solve'}
  </div>
}