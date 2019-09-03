import React, { Component} from 'react'
import PropTypes from 'prop-types'
import './Pagination.css'

import { paginationList } from '../utils/paginationList'

class Pagination extends Component {
  componentDidMount(){
  }

  listPages = () => {
    const {page, totalPages} = this.props;
    const pagelist = paginationList(page, totalPages);
    return pagelist.map((item, key) => {
      console.log(item);
      return(
          <button
            value={item}
            className = {item == page ? 'active' : null}
            onClick={item != '...' ? this.handleChange : null}
          >
            {item}
          </button>
      );
    });
  };

  handleChange = (e) => {
    const {renewPageData} = this.props;
    console.log(e.target.value);
    renewPageData(e.target.value);
  }

    render () {
      const {page, renewPageData} = this.props;
      return (
        <div className='pagination'>
          {this.listPages()}
        </div>
    );
    }
}

export default Pagination
