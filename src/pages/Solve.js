import React from 'react'
import { useDispatch } from 'react-redux'
import Grid from '../components/grid/Grid'

export default function (props) {
  const dispatch = useDispatch()
  dispatch({ type: 'SET_STATE', state: 'SOLVE' })
  return <div>
    <h1>Solve</h1>
    <Grid />
  </div>
}