/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useDispatch } from 'react-redux'

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

  const size = '4em'
  const styles = [css`
    min-height: ${size};
    min-width: ${size};
    display: grid;
    ${getBorderStyle(x, y)}
  `]

  return <div
    css={styles}
    onClick={() => dispatch({ type: 'SELECT_CELL', x, y })}
  >
    {props.children}
  </div>
}