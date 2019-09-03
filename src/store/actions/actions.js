import axios from 'axios';
import * as type from './actionTypes';
import store from '../../store/store.js'

export const fetchData = (data) => {
  return {
    type: type.FETCH_DATA,
    data,
  };
};

export const fetchGenres = (data) => {
  return {
    type: type.FETCH_GENRES,
    data,
  };
};

export const setGenre = (data) => {
  console.log(data);
  return {
    type: type.SET_GENRE,
    data,
  };
};

export const setYear = (data) => {
  console.log(data);
  return {
    type: type.SET_YEAR,
    data: data,
  };
};

export const setSorting = (data) => {
  console.log(data);
  return {
    type: type.SET_SORTING,
    data: data,
  };
};

export const filterWithGenre = (data) => {
  return (dispatch) => {
    dispatch(setGenre(data));
    dispatch(renewPageData(1));
  };
};

export const filterWithYear = (data) => {
  return (dispatch) => {
    dispatch(setYear(data));
    console.log('filter with year action:',data);
    dispatch(renewPageData(1));
  };
};

export const sortWithSelect = (data) => {
  return (dispatch) => {
    dispatch(setSorting(data));
    dispatch(renewPageData(1));
  };
};

export const fetchInitialData = () => {
  return (dispatch) => {
    return axios.get(movieListUrl(1))
      .then(response => {
        console.log(response);
        dispatch(fetchData({movies: response.data.results, page: response.data.page, total_pages: response.data.total_pages}))
      })
      .catch(error => {
        throw(error);
      });
  };
};

const movieListUrl = (page, sort_by = 'revenue.desc') => {
  const apiKey = '&api_key=5874acfd11651a28c55771624f7021f4&language=en-EN';
  const genreId = store.getState().selectedGenre.id !== null ? '&with_genres=' + store.getState().selectedGenre.id : '';
  const year = store.getState().selectedYear.value !== null ? '&year=' + store.getState().selectedYear.value : '';
  const sortBy = store.getState().sort.value !== null ? 'sort_by='+ store.getState().sort.value : ''  ;
  const pageId = '&page=' + page;
  let moviesUrl = 'https://api.themoviedb.org/3/discover/movie?' + sortBy + apiKey + pageId +  genreId + year;
  return moviesUrl;
};

export const renewPageData = (page) => {
  return (dispatch) => {
    return axios.get(movieListUrl(page))
      .then(response => {
        console.log('renew:', response);
        dispatch(fetchData({movies: response.data.results, page: response.data.page, total_pages: response.data.total_pages}))
      })
      .catch(error => {
        throw(error);
      });
  };
};


export const fetchGenresData = () => {
  return (dispatch) => {
    return axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=5874acfd11651a28c55771624f7021f4&language=ru_RU')
      .then(response => {
        console.log('fetched genres', response);
        const listGenres = [];
          response.data.genres.map(item => (
            listGenres.push({ value: item.name, label: item.name, id: item.id })
          ));
        dispatch(fetchGenres(listGenres));
      })
      .catch(error => {
        throw(error);
      });
  };
};
