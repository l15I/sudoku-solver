/** @jsx jsx */
import { css, jsx } from '@emotion/core'

function getCellBorderStyle(x, y) {
  const style = '.1em solid black'
  const boldStyle = '.2em solid black'
  const styles = [`
    border-top: ${x % 3 === 0 ? boldStyle : style};
    border-left ${y % 3 === 0 ? boldStyle : style};
  `]
  if (x === 8) {
    styles.push(`border-bottom: ${boldStyle};`)
  }
  if (y === 8) {
    styles.push(`border-right: ${boldStyle};`)
  }
  return styles.join('')
}

export default function (props) {
  const cellSize = '4em'

  return <div css={css`
    display: grid;
    grid-template-columns: ${`${cellSize} `.repeat(9)};
    grid-template-rows: ${`${cellSize} `.repeat(9)};
    justify-content: center;
  `}>
    {props.children.map((child, idx) => <div
      key={idx}
      css={css`
      height: ${cellSize};
      width: ${cellSize};
      display: grid;
      ${getCellBorderStyle(Math.floor(idx / 9), idx % 9)}
    `}
    >
      {child}
    </div>
    )}
  </div>
}