/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default function () {
  return <div css={css`
    margin: 0 auto;
    padding: 1em;
    h1 {
      font-size: 1.5em;
      font-weight: 600;
    }
    h2 {
      padding-top: 1em;
      font-size: 1.2em;
      font-weight: 600;
    }
    p {
      padding-top: 1em;
      line-height: 1.5em;
    }
    a {
      color: black;
    }
  `}>
    <h1>Sudoku solver</h1>
    <p>
      This is a simple sudoku solving application. It was created to try React with hooks,
      Redux and Emotion styles. Source code can be found&nbsp;
      <a href='https://github.com/l15i/sudoku-solver' target='_blank' rel='noreferrer noopener'>here</a>.
    </p>
    <h2>Creating</h2>
    <p>
      After click on "Sudoku" link above, empty grid will be shown. To fill a cell, click on it
      (it will have dark background) and press key from "1" to "9". If chosen value is not allowed
      (eg. there is already such value in row) notification will appear. To delete value from selected
      cell, press "Delete". You can reset all values using link "Reset" below grid, or fill example
      from <a href='https://en.wikipedia.org/wiki/Sudoku' target='_blank' rel='noreferrer noopener'>wikipedia</a>.
    </p>
    <h2>Solving</h2>
    <p>
      Click "solve" button to see solved sudoku. There is an interactive mode showing steps.
      Check "interactive" checkbox to see all steps during solving sudoku. If sudoku is unsolvable,
      notification will be shown.
    </p>
  </div>
}