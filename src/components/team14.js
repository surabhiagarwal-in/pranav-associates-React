import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Steps1 from './steps1'
import './team14.css'

const Team14 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="team14-max-width thq-section-max-width">
        <div className="team14-section-title">
          <div className="team14-content">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="team14-text26">Meet Our Team</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large team14-text11">
              {props.content2 ?? (
                <Fragment>
                  <span className="team14-text23">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div
          data-thq="slider"
          data-loop="false"
          data-autoplay="false"
          data-navigation="false"
          data-pagination="false"
          className="team14-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper"></div>
          <div
            data-thq="slider-pagination"
            className="team14-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          ></div>
          <div
            data-thq="slider-button-prev"
            className="team14-slider-button-prev swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="team14-slider-button-next swiper-button-next"
          ></div>
        </div>
      </div>
      <Steps1
        step1Title={
          <Fragment>
            <span className="team14-text12">Heading</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="team14-text13">Heading</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="team14-text14">Heading</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="team14-text15">Heading</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="team14-text16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="team14-text17">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="team14-text18">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="team14-text19">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
      ></Steps1>
      <span className="team14-text20 thq-body-small">
        {props.text ?? (
          <Fragment>
            <span className="team14-text22">Default value</span>
          </Fragment>
        )}
      </span>
      <button className="team14-button thq-button-filled button">
        <span className="thq-body-small">Default value</span>
      </button>
    </div>
  )
}

Team14.defaultProps = {
  text: undefined,
  content2: undefined,
  rootClassName: '',
  heading1: undefined,
}

Team14.propTypes = {
  text: PropTypes.element,
  content2: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
}

export default Team14
