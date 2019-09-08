import immer from 'immer'

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
  return {
    grid,
    error: null,
    solved: false
  }
}

function sudokuFromWikipedia() {
  return {
    grid: [{ 'x': 0, 'y': 0, 'value': 5, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 1, 'value': 3, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 3, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 4, 'value': 7, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 5, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 7, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 0, 'y': 8, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 0, 'value': 6, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 1, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 3, 'value': 1, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 4, 'value': 9, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 5, 'value': 5, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 7, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 1, 'y': 8, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 0, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 1, 'value': 9, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 2, 'value': 8, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 3, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 4, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 5, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 7, 'value': 6, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 2, 'y': 8, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 0, 'value': 8, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 1, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 3, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 4, 'value': 6, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 5, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 7, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 3, 'y': 8, 'value': 3, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 0, 'value': 4, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 1, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 3, 'value': 8, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 4, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 5, 'value': 3, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 7, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 4, 'y': 8, 'value': 1, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 0, 'value': 7, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 1, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 3, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 4, 'value': 2, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 5, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 7, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 5, 'y': 8, 'value': 6, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 0, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 1, 'value': 6, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 3, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 4, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 5, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 6, 'value': 2, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 7, 'value': 8, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 6, 'y': 8, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 0, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 1, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 3, 'value': 4, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 4, 'value': 1, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 5, 'value': 9, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 7, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 7, 'y': 8, 'value': 5, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 0, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 1, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 2, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 3, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 4, 'value': 8, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 5, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 6, 'value': null, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 7, 'value': 7, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }, { 'x': 8, 'y': 8, 'value': 9, 'selected': false, possibleValues: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]) }],
    error: null,
    solved: false
  }
}

export default function (state = sudokuFromWikipedia(), action) {
  switch (action.type) {
    case 'SELECT_CELL':
      const { x, y } = action
      const clone = immer(state.grid, draftGrid => {
        draftGrid.forEach(cell => cell.selected = false)
        draftGrid[x * 9 + y].selected = true
      })

      return {
        ...state,
        grid: clone
      }

    case 'FILL_CELL':
      const { value } = action
      let selectedCell = state.grid.find(cell => cell.selected)
      if (!selectedCell) {
        return state
      }

      const modifiedCell = immer(selectedCell, draftCell => {
        draftCell.possibleValues = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
        for (const idx of calculateCellsIndexesToCheck(draftCell.x, draftCell.y)) {
          draftCell.possibleValues.delete(state.grid[idx].value)
        }
        if (draftCell.possibleValues.has(value)) {
          draftCell.value = value
        }
      })

      if (modifiedCell.value === value) {
        let idx = modifiedCell.x * 9 + modifiedCell.y
        return {
          ...state,
          grid: [
            ...state.grid.slice(0, idx),
            modifiedCell,
            ...state.grid.slice(idx + 1)
          ]
        }
      }

      return {
        ...state,
        error: `Value ${value} is not allowed here`
      }

    case 'CLEAN_CELL':
      return {
        ...state,
        grid: immer(state.grid, draftGrid => draftGrid.forEach(cell => {
          if (cell.selected) {
            cell.value = null
          }
        }))
      }

    case 'CLEAN_ERROR_INFO': {
      return {
        ...state,
        error: null
      }
    }

    case 'SOLVE_ONE_STEP':
      let sthChanged = false
      const afterStep = immer(state.grid, draftGrid => draftGrid.forEach(cell => {
        if (!cell.value) {
          const cellsToCheck = calculateCellsIndexesToCheck(cell.x, cell.y)
          for (const idx of cellsToCheck) {
            sthChanged = cell.possibleValues.delete(state.grid[idx].value) || sthChanged
          }
          if (cell.possibleValues.size === 1) {
            cell.value = cell.possibleValues.values().next().value
          }
        }
      }))

      if (sthChanged) {
        return {
          ...state,
          grid: afterStep
        }
      }

      if (afterStep.some(cell => !cell.value)) {
        return {
          ...state,
          error: 'This sudoku is unsolvable'
        }
      }

      return {
        ...state,
        solved: true
      }
    case 'SOLVE':
      let sudoku = immer(state.grid, draftGrid => {
        let stepChanged
        do {
          stepChanged = false
          for (let cell of draftGrid) {
            if (!cell.value) {
              const cellsToCheck = calculateCellsIndexesToCheck(cell.x, cell.y)
              for (const idx of cellsToCheck) {
                stepChanged = cell.possibleValues.delete(draftGrid[idx].value) || stepChanged
              }
              if (cell.possibleValues.size === 1) {
                cell.value = cell.possibleValues.values().next().value
              }
            }
          }
        } while (stepChanged)
      })

      if (sudoku.some(cell => !cell.value)) {
        return {
          ...state,
          grid: sudoku,
          error: 'This sudoku is unsolvable'
        }
      }

      return {
        ...state,
        grid: sudoku,
        solved: true
      }

    default: {
      return state
    }
  }
}

function calculateCellsIndexesToCheck(cellX, cellY) {
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