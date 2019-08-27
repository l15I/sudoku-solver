import React from 'react'
import { useSelector } from 'react-redux'
import Cell from './Cell'

export default function (props) {
  const grid = useSelector(s => s.grid)
  console.log(grid)
  return <>
    <div>Grid</div>
    {grid.map((cell, idx) => <Cell x={cell.x} y={cell.y} key={idx} />)}
  </>
}