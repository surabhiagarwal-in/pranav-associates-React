import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps1.css'

const Steps1 = (props) => {
  return (
    <div className="steps1-container1 thq-section-padding">
      <div className="steps1-max-width thq-section-max-width">
        <div className="steps1-container2">
          <div className="steps1-container3 thq-card">
            <img
              alt={props.step1ImageAlt}
              src={props.step1ImageSrc}
              className="steps1-image1 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step1Title ?? (
                <Fragment>
                  <span className="steps1-text27">Heading</span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text11 thq-body-small">
              {props.step1Description ?? (
                <Fragment>
                  <span className="steps1-text22">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text12 thq-heading-3">01</label>
          </div>
          <div className="steps1-container4 thq-card">
            <img
              alt={props.step2Alt}
              src={props.step2ImageSrc}
              className="steps1-image2 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step2Title ?? (
                <Fragment>
                  <span className="steps1-text26">Heading</span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text14 thq-body-small">
              {props.step2Description ?? (
                <Fragment>
                  <span className="steps1-text28">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text15 thq-heading-3">02</label>
          </div>
        </div>
        <div className="steps1-container5">
          <div className="steps1-container6 thq-card">
            <img
              alt={props.step3ImageAlt}
              src={props.step3ImageSrc}
              className="steps1-image3 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step3Title ?? (
                <Fragment>
                  <span className="steps1-text25">Heading</span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text17 thq-body-small">
              {props.step3Description ?? (
                <Fragment>
                  <span className="steps1-text29">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text18 thq-heading-3">03</label>
          </div>
          <div className="steps1-container7 thq-card">
            <img
              alt={props.step4ImageAlt}
              src={props.step4ImageSrc}
              className="steps1-image4 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step4Title ?? (
                <Fragment>
                  <span className="steps1-text24">Heading</span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text20 thq-body-small">
              {props.step4Description ?? (
                <Fragment>
                  <span className="steps1-text23">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text21 thq-heading-3">04</label>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps1.defaultProps = {
  step1ImageAlt: 'image',
  step3ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step4ImageAlt: 'image',
  step1Description: undefined,
  step4Description: undefined,
  step4Title: undefined,
  step3Title: undefined,
  step2Title: undefined,
  step2Alt: 'image',
  step1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step1Title: undefined,
  step2Description: undefined,
  step3Description: undefined,
  step4ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step2ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step3ImageAlt: 'image',
}

Steps1.propTypes = {
  step1ImageAlt: PropTypes.string,
  step3ImageSrc: PropTypes.string,
  step4ImageAlt: PropTypes.string,
  step1Description: PropTypes.element,
  step4Description: PropTypes.element,
  step4Title: PropTypes.element,
  step3Title: PropTypes.element,
  step2Title: PropTypes.element,
  step2Alt: PropTypes.string,
  step1ImageSrc: PropTypes.string,
  step1Title: PropTypes.element,
  step2Description: PropTypes.element,
  step3Description: PropTypes.element,
  step4ImageSrc: PropTypes.string,
  step2ImageSrc: PropTypes.string,
  step3ImageAlt: PropTypes.string,
}

export default Steps1
