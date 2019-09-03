import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Main.css'
import MovieList from '../movies/MovieList'
import Pagination from '../pagination/Pagination'
import { connect } from 'react-redux'
import axios from 'axios'
import { fetchInitialData, fetchGenresData, renewPageData } from '../../store/actions/actions'

class Main extends Component {
 componentDidMount(){
   const { fetchGenresData, fetchInitialData, renewPageData } = this.props;
   fetchInitialData();
   fetchGenresData();
  }

  render () {
  const { movies, state1, genres, selectedGenre, page, totalPages, renewPageData } = this.props;
  console.log(selectedGenre);

    return (
      <div className="main-window">
        <p>{selectedGenre}</p>
        <MovieList movies={movies}/>
        <div className="spinner"/>
        <Pagination page={page} totalPages={totalPages} renewPageData={renewPageData}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
//  data: state.data.data,
//  activePage: state.data.activePage,
//  year: state.data.year,
//  sort: state.data.sort,
    selectedGenre: state.selectedGenre.value,
    genres: state.genres,
    page: state.data.page,
    totalPages: state.data.total_pages,
//  selectedGenres: state.data.selectedGenres,
//  showPreloader: state.data.showPreloader,
//  showError: state.showError,
//    movies: state.movies,
    movies: state.data.movies,
    state1: state,
});

const mapDispatchToProps = dispatch => {
  return {
    fetchInitialData: () => dispatch (fetchInitialData()),
    fetchGenresData: () => dispatch (fetchGenresData()),
    renewPageData: (page) => dispatch (renewPageData(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
