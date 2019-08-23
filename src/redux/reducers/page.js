export default function (page = 'FILL', action) {
  switch (action.type) {
    case 'SET_PAGE': {
      return action.page
    }
    default: {
      return page
    }
  }
}