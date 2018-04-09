import axios from 'axios';
import { setFlash } from './flash';

const setBreweries = (breweries) => {
  return { type: 'SET_BREWERIES', breweries: breweries }
}

export const fetchBreweries = () => {
  return dispatch => {
    axios.get(`api/all_breweries?page=1`)
      .then( res => {
        dispatch(setBreweries(res.data.entries))
        console.log(res.data)
      })
      .catch( err => {
        dispatch(setFlash('Error', 'red'))
        console.log(err)
    });
  }
}