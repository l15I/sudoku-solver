/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useSelector } from 'react-redux'

export default function (props) {
  const { x, y } = props
  const cell = useSelector(state => state.grid[x * 9 + y])

  if (cell.value) {
    return <div css={css`
      margin:auto;
      font-size: 2em
    `}>{cell.value}</div>
  }

  const values = []
  for (let i = 1; i <= 9; i++) {
    const key = [cell.x, cell.y, i].join('-')
    values.push(
      <div key={key} css={{ opacity: cell.possibleValues.has(i) ? 1 : 0.2 }}>{i}</div>
    )
  }
  return <div css={css`
      display: grid;
      height: 100%;
      font-size: .75em;
      padding: .25em;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      justify-items: center;
      align-items: center;
    `}>
    {values}
  </div>

}