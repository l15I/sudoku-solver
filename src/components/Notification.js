/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function (props) {
  const error = useSelector(s => s.sudoku.error)
  const dispatch = useDispatch()
  const style = css`
    color: blue;
    position: absolute;
    top: ${error ? 10 : -100}px;
    right: 10px;
    transition: top .5s linear;
  `
  useEffect(() => {
    const id = setTimeout(() => dispatch({ type: 'CLEAN_ERROR_INFO' }), 3000)
    return () => clearTimeout(id)
  }, [dispatch, error])
  return <div css={style}>{error}</div >
}