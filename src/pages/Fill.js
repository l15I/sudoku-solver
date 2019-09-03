import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Grid from '../components/grid/Grid'

export default function (props) {
  const dispatch = useDispatch()
  dispatch({ type: 'SET_STATE', state: 'FILL' })

  useEffect(() => {
    //TODO: Add option to delete cell value
    const listener = evt => {
      const { key } = evt
      if (key === 'Delete') {
        dispatch({ type: 'CLEAN_CELL' })
      } else {
        const value = Number(key)
        if (!isNaN(value)) {
          dispatch({ type: 'FILL_CELL', value })
        }
      }
    }
    document.addEventListener('keyup', listener)
    return () => document.removeEventListener('keyup', listener)
  })
  return <div>
    <h1>Fill</h1>
    <Link to='/solve'>Solve</Link>
    <Grid />
  </div>
}