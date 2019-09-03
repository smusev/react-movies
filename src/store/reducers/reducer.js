import * as type from '../actions/actionTypes'

const initState = {
  activePage: 1,
  data: {
    results: [],
  },
  sort: {
    label: null,
    value: 'popularity.desc',
  },
  genres: [],
  selectedGenre: {
    id: null,
    label: null,
    value: null,
  },
  selectedYear: {
    label: null,
    value : null,
  },
  showPreloader: false,
  showError: false,
  detailsInfo: {},
};


export const reducer = (state = initState, action) => {
  switch (action.type) {
  case type.FETCH_DATA:
    return {
      ...state,
      data: action.data,
    };
    case type.FETCH_GENRES:
      return {
        ...state,
        genres: action.data,
      };
    case type.SET_GENRE:
      return {
        ...state,
        selectedGenre: action.data,
      };
    case type.SET_YEAR:
      return {
        ...state,
        selectedYear: action.data,
    };
    case type.SET_SORTING:
      return {
        ...state,
        sort: action.data,
    };

  default:
    return {
      ...state,
    };
  }
}
