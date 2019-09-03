import React from 'react'
import PropTypes from 'prop-types'

const MovieSummary = ({movie}) => {
  return (
    <div className="movie-list-item">
      <div className="movie-poster">
        <img src={'https://image.tmdb.org/t/p/w200'+movie.poster_path}/>
      </div>
      <div className='movie-info'>
        <h3 className='movie-title'>{movie.title}</h3>
        <ul>
          <li className='rating-genre'>{movie.genre}</li>
          <li className='rating-score'><h5>Средняя оценка: </h5>{movie.vote_average}</li>
          <li className='movie-description'>{movie.overview}</li>
          <li className='movie-directors'><h5>Directors: </h5>{movie.directors}</li>
          <li className='movie-stars'><h5>Дата выхода: </h5>{movie.release_date}</li>
        </ul>
      </div>
    </div>
  )
}

export default MovieSummary
