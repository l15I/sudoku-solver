/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link } from 'react-router-dom'

export default function () {
  return <nav css={css`
    display: flex;
    margin: auto;
    a {
      color: black;
      padding: 1em;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `}>
    <Link to='/'>About</Link>
    <Link to='/sudoku'>Sudoku</Link>
  </nav>
}