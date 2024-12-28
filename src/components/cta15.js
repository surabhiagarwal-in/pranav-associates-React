import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta15.css'

const CTA15 = (props) => {
  return (
    <div
      className={`cta15-container thq-section-padding ${props.rootClassName} `}
    >
      <img
        alt={props.backgroundImageAlt}
        src={props.backgroundImageSrc}
        className="cta15-background-image thq-img-ratio-16-9"
      />
      <div className="cta15-max-width thq-section-max-width">
        <div className="cta15-column">
          <div className="cta15-content">
            <h2 className="cta15-text1 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="cta15-text6">
                    Get in touch with us today!
                  </span>
                </Fragment>
              )}
            </h2>
            <p className="cta15-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="cta15-text7">
                    Contact us now to discuss your furniture, IT, construction,
                    or maintenance needs.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="cta15-actions">
            <button type="button" className="thq-button-filled">
              <span>
                {props.action1 ?? (
                  <Fragment>
                    <span className="cta15-text5">Contact Us</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button type="button" className="thq-button-outline">
              <span>
                {props.action2 ?? (
                  <Fragment>
                    <span className="cta15-text8">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA15.defaultProps = {
  action1: undefined,
  backgroundImageSrc:
    'https://images.unsplash.com/photo-1468500428914-59a49bceb33c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDQ4Nzg2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  rootClassName: '',
  heading1: undefined,
  content1: undefined,
  action2: undefined,
  backgroundImageAlt: 'CTA Background Image',
}

CTA15.propTypes = {
  action1: PropTypes.element,
  backgroundImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action2: PropTypes.element,
  backgroundImageAlt: PropTypes.string,
}

export default CTA15
