import axios from 'axios'

export const getData = () => {
   axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&page=1')
    .then(res => {
      console.log(res.data.results);
      return { movies: res.data.results} ;
    });
};

/*
export const getData = () => {
  return { pesec: 'gav-gav' }
}
*/
