import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '../components/grid/Grid'

export default function (props) {
  return <div>
    <h1>Fill</h1>
    <Link to='/solve'>Solve</Link>
    <Grid />
  </div>
}