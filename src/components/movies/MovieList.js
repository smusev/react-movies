import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'
import MovieSummary from './MovieSummary'

const MovieList = ({movies}) => {
  return (
    <div className="movie-list">
      { movies && movies.map(movie => {
        return(
          <MovieSummary movie={movie} key={movie.id}/>
        )
      })}
    </div>
  )
}

export default MovieList
