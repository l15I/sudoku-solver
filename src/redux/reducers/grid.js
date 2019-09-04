function createEmptyGrid() {
  const grid = new Array(81)
  for (let x = 0; x < 9; x++)
    for (let y = 0; y < 9; y++)
      grid[x * 9 + y] = {
        x,
        y,
        value: null,
        selected: false,
        possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
      }
  return grid
}

function sudokuFromWikipedia() {
  return [{ 'x': 0, 'y': 0, 'value': 5, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 1, 'value': 3, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 3, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 4, 'value': 7, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 5, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 7, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 8, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 0, 'value': 6, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 1, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 3, 'value': 1, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 4, 'value': 9, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 5, 'value': 5, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 7, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 8, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 0, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 1, 'value': 9, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 2, 'value': 8, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 3, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 4, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 5, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 7, 'value': 6, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 8, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 0, 'value': 8, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 1, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 3, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 4, 'value': 6, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 5, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 7, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 8, 'value': 3, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 0, 'value': 4, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 1, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 3, 'value': 8, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 4, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 5, 'value': 3, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 7, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 8, 'value': 1, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 0, 'value': 7, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 1, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 3, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 4, 'value': 2, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 5, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 7, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 8, 'value': 6, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 0, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 1, 'value': 6, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 3, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 4, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 5, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 6, 'value': 2, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 7, 'value': 8, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 8, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 0, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 1, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 3, 'value': 4, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 4, 'value': 1, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 5, 'value': 9, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 7, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 8, 'value': 5, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 0, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 1, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 3, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 4, 'value': 8, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 5, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 7, 'value': 7, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 8, 'value': 9, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }]
}

export default function (grid = sudokuFromWikipedia(), action) {
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
    case 'CLEAN_CELL':
      return Array.from(grid).map(cell => {
        if (cell.selected) {
          cell.value = null
        }
        return cell
      })
    case 'SOLVE_ONE_STEP':
      return Array.from(grid).map(cell => {
        if (!cell.value) {
          const cellsToCheck = calculateCellsToCheck(cell.x, cell.y)
          for (const idx of cellsToCheck) {
            cell.possibleValues.delete(grid[idx].value)
          }
          if (cell.possibleValues.size === 1) {
            cell.value = cell.possibleValues.values().next().value
          }
        }
        return cell
      })
    default: {
      return grid
    }
  }
}

function calculateCellsToCheck(cellX, cellY) {
  const cells = new Set()
  for (let x = 0; x < 9; x++) {
    cells.add(x * 9 + cellY)
  }
  for (let y = 0; y < 9; y++) {
    cells.add(cellX * 9 + y)
  }

  const xStart = Math.floor(cellX / 3) * 3
  const yStart = Math.floor(cellY / 3) * 3

  for (let x = xStart; x < xStart + 3; x++) {
    for (let y = yStart; y < yStart + 3; y++) {
      cells.add(x * 9 + y)
    }
  }
  cells.delete(cellX * 9 + cellY)
  return cells
}