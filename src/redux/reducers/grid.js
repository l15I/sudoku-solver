function createEmptyGrid() {
  const grid = new Array(81)
  for (let x = 0; x < 9; x++)
    for (let y = 0; y < 9; y++)
      grid[x * 9 + y] = { x, y, val: null }
  return grid
}

export default function (grid = createEmptyGrid(), action) {
  switch (action.type) {
    default: {
      return grid
    }
  }
}