export default function (state = 'FILL', action) {
  switch (action.type) {
    case 'SET_STATE':
      return action.state
    default: {
      return state
    }
  }
}