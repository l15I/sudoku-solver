/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function (props) {
  const dispatch = useDispatch()
  const error = useSelector(s => s.sudoku.error)

  const prevError = useRef()
  useEffect(() => {
    prevError.current = error
  })

  const [opacity, setOpacity] = useState(0)
  const style = css`
    color: white;
    background-color: black;
    text-align: center;
    padding: 1em;
    position: absolute;
    left: 50%;
    top: 1em;
    transform: translate(-50%);
    border-radius: .25em;
    opacity: ${opacity};
    transition: opacity .5s linear;
  `

  useEffect(() => {
    if (error) {
      setOpacity(0.9)
      const id = setTimeout(() => {
        setOpacity(0)
        dispatch({ type: 'CLEAN_ERROR_INFO' })
      }, 3000)
      return () => clearTimeout(id)
    }
  }, [dispatch, error])

  return <div css={style}>{error || prevError.current}</div >
}