const breweries = (state = [], action) => {
  switch(action.type) {
    case 'SET_BREWERIES':
      return action.breweries
    case 'MORE_BREWERS':
      return [...state, ...action.breweries]
    default:
      return state;
  }
}

export default breweries;