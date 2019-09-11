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

  const [top, setTop] = useState(-100)
  const style = css`
    color: blue;
    position: absolute;
    top: ${top}px;
    right: 10px;
    transition: top .5s linear;
  `

  useEffect(() => {
    if (error) {
      setTop(10)
      const id = setTimeout(() => {
        setTop(-100)
        dispatch({ type: 'CLEAN_ERROR_INFO' })
      }, 3000)
      return () => clearTimeout(id)
    }
  }, [dispatch, error])

  return <div css={style}>{error || prevError.current}</div >
}