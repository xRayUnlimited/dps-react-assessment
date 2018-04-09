import axios from 'axios';
import { setFlash } from './flash';

const setBeers = (beers) => {
  return { type: 'SET_BEERS', beers: beers }
}

export const getBeers = () => {
  return dispatch => {
    axios.get(`/api/all_beers?page=1`)
      .then( res => {
        dispatch(setBeers(res.data.entries))
        console.log(res.data)
      })
      .catch( err => {
        dispatch(setFlash('Error', 'red'))
        console.log(err)
    });
  }
}