import React from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../redux/actions'

export default function (props) {
  const dispatch = useDispatch()
  return <div>
    <h1>Fill</h1>
    <button onClick={() => dispatch(setPage('SOLVE'))}>Solve</button>
  </div>
}