import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './banner1.css'

const Banner1 = (props) => {
  return (
    <div
      className={`banner1-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner1-max-width thq-section-max-width">
        <div className="banner1-container2">
          <h2 className="banner1-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner1-text5">
                  Welcome to Pranav Associates
                </span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner1-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner1-text4">
                  Your one-stop solution for custom and ready-made furniture,
                  installation services, maintenance contracts, and more.
                </span>
              </Fragment>
            )}
          </h3>
        </div>
        <Link to="/services" className="banner1-navlink thq-button-filled">
          <span>
            {props.action1 ?? (
              <Fragment>
                <span className="banner1-text3">Explore Our Services</span>
              </Fragment>
            )}
          </span>
        </Link>
      </div>
    </div>
  )
}

Banner1.defaultProps = {
  action1: undefined,
  content1: undefined,
  heading1: undefined,
  rootClassName: '',
}

Banner1.propTypes = {
  action1: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Banner1
