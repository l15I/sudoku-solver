/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const color = 'white'

export default function () {
  return <div
    css={css`
      padding: 32px;
      color: pink;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}
  >
    Hover to change color.
  </div>
}