function createEmptyGrid() {
  const grid = new Array(81)
  for (let x = 0; x < 9; x++)
    for (let y = 0; y < 9; y++)
      grid[x * 9 + y] = {
        x,
        y,
        value: null,
        selected: false
      }
  return grid
}

export default function (grid = createEmptyGrid(), action) {
  switch (action.type) {
    case 'SELECT_CELL':
      const { x, y } = action
      const clone = Array.from(grid)
      clone.forEach(cell => cell.selected = false)
      clone[x * 9 + y].selected = true
      return clone
    case 'FILL_CELL':
      // TODO: Add validation
      const { value } = action
      return Array.from(grid).map(cell => {
        if (cell.selected) {
          cell.value = value
        }
        return cell
      })
    default: {
      return grid
    }
  }
}