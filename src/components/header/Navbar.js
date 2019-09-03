import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from '../../logo.svg'
import './Navbar.css'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterWithGenre, filterWithYear, sortWithSelect } from '../../store/actions/actions'

const options = [
  {value: 'popularity.desc', label: 'По популярности'},
  {value: 'vote_average.desc', label: 'По рейтингу'},
  {value: 'revenue.desc', label: 'По кассовым сборам'},
];

const years = [];


class Navbar extends Component {
  state = {
    selectedOption: {
      label: 'По популярности',
      value: 'popularity.desc',
    },
    selectedYear: {
      label: 'Выбрать год',
      value: '',
    },
    selectedGenre: {
      label: 'Выбрать жанр',
      value: '',
    },

  };

  componentDidMount = () => {};

  sortSelect = (selectedOption) => {
    const {sortWithSelect} = this.props;
    this.setState({ selectedOption: selectedOption });
    console.log(`Option selected:`, selectedOption);
    sortWithSelect(selectedOption);
  };

  selectGenre = (selectedGenre) => {
    const { filterWithGenre } = this.props;
    this.setState({ selectedGenre: selectedGenre });
    console.log(`Genre selected:`, selectedGenre, this.state);
    filterWithGenre( selectedGenre );
  };


  selectYear = (selectedYear) => {
    const { filterWithYear } = this.props;
    this.setState({ selectedYear: selectedYear });
    console.log(`Year selected:`, selectedYear, this.state);
    filterWithYear(selectedYear);
  };



  render(){
    const { selectedOption, selectedYear, selectedGenre } = this.state;
    const { genres, state1 } = this.props;
    for (let i=2019; i >= 1901; i--){
      years.push({value: i, label: i});
    };
    console.log('state:', state1)
    return (
      <div className="header-container">
        <div className="header-form">
          <div className="header-dropdowns">
            <img src={logo} className="logo" alt="logo" />
            <div className="select-container">
              <span>Жанры</span>
              <Select className="select" options={genres} value={selectedGenre} onChange={this.selectGenre} />
            </div>
            <div className="select-container">
              <span>Год</span>
              <Select className="select" options={years} value={selectedYear} onChange={this.selectYear} />
            </div>
            <div className="select-container">
              <span>Сортировать</span>
              <Select className="select" options={options} value={selectedOption} onChange={this.sortSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
//  data: state.data.data,
//  activePage: state.data.activePage,
//  year: state.data.year,
    sort: state.sort,
    genres: state.genres,
//  selectedGenres: state.data.selectedGenres,
//  showPreloader: state.data.showPreloader,
//  showError: state.showError,
//    movies: state.movies,
    state1: state,
});

const mapDispatchToProps = dispatch => {
  return {
    filterWithGenre: (genre) => dispatch (filterWithGenre(genre)),
    filterWithYear: (year) => dispatch (filterWithYear(year)),
    sortWithSelect: (sort) => dispatch (sortWithSelect(sort)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
