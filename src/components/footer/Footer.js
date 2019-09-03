import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-menu">
          <h3>This is footer</h3>
          <ul>
            <li className="footer-item">Email: jonsmusev@gmail.com</li>
            <li className="footer-item">LinkedIN</li>
            <li className="footer-item">Facebook</li>
          </ul>
        </div>
        <div className="footer-menu">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
