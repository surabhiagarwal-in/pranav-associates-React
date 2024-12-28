import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './logos8.css'

const Logos8 = (props) => {
  return (
    <div
      className={`logos8-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="logos8-max-width thq-section-max-width">
        <div className="logos8-container2">
          <h2 className="thq-heading-2 logos8-text1">
            {props.heading1 ?? (
              <Fragment>
                <span className="logos8-text3">Companies that trust us</span>
              </Fragment>
            )}
          </h2>
          <p className="logos8-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="logos8-text4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="logos8-container3 thq-grid-2">
          <img
            alt={props.logo1Alt}
            src={props.logo1Src}
            className="logos8-logo1 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo2Alt}
            src={props.logo2Src}
            className="logos8-logo2 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo3Alt}
            src={props.logo3Src}
            className="logos8-logo3 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo4Alt}
            src={props.logo4Src}
            className="logos8-logo4 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo5Alt}
            src={props.logo5Src}
            className="logos8-logo5 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo7Alt}
            src={props.logo7Src}
            className="logos8-logo7 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo6Alt}
            src={props.logo6Src}
            className="logos8-logo6 thq-img-ratio-16-9"
          />
          <img
            alt={props.logo8Alt}
            src={props.logo8Src}
            className="logos8-logo8 thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Logos8.defaultProps = {
  logo8Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo4Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo8Alt: 'Annual Maintenance Contracts Logo',
  logo4Alt: 'Construction Services Logo',
  logo1Alt: 'Pranav Associates Logo',
  logo3Alt: 'IT Solutions Logo',
  heading1: undefined,
  content1: undefined,
  logo5Alt: 'Epoxy Flooring Logo',
  logo2Alt: 'Custom Furniture Solutions Logo',
  logo6Alt: 'Cold Storage Solutions Logo',
  logo6Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo7Alt: 'Prefabricated Structures Logo',
  logo3Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo1Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo2Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  rootClassName: '',
  logo5Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
  logo7Src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/3c22ad70-97c1-42ae-9e5e-7f9cfdb33faa?org_if_sml=1&force_format=original',
}

Logos8.propTypes = {
  logo8Src: PropTypes.string,
  logo4Src: PropTypes.string,
  logo8Alt: PropTypes.string,
  logo4Alt: PropTypes.string,
  logo1Alt: PropTypes.string,
  logo3Alt: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  logo5Alt: PropTypes.string,
  logo2Alt: PropTypes.string,
  logo6Alt: PropTypes.string,
  logo6Src: PropTypes.string,
  logo7Alt: PropTypes.string,
  logo3Src: PropTypes.string,
  logo1Src: PropTypes.string,
  logo2Src: PropTypes.string,
  rootClassName: PropTypes.string,
  logo5Src: PropTypes.string,
  logo7Src: PropTypes.string,
}

export default Logos8
