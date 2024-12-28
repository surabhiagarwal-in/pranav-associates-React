import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features16.css'

const Features16 = (props) => {
  return (
    <div className="features16-layout300 thq-section-padding">
      <div className="features16-max-width thq-section-max-width">
        <div className="features16-section-title">
          <span className="features16-text10 thq-body-small">
            {props.slogan1 ?? (
              <Fragment>
                <span className="features16-text17">Slogan</span>
              </Fragment>
            )}
          </span>
          <div className="features16-content1">
            <h2 className="features16-text11 thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="features16-text20">
                    Custom and Ready-Made Furniture Solutions
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features16-text12 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="features16-text13">
                    Pranav Associates offers a wide range of custom and
                    ready-made furniture solutions tailored to meet the specific
                    needs of our clients. From design to installation, we ensure
                    high-quality craftsmanship and attention to detail.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features16-content2">
          <div className="features16-row thq-flex-row">
            <div className="features16-feature1">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content3">
                <h3 className="features16-feature1-title thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features16-text15">
                        Installation Services
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features16-text16">
                        Our team provides professional installation services for
                        all the products we offer, ensuring a seamless and
                        hassle-free experience for our clients.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features16-feature2">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content4">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features16-text18">IT Solutions</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features16-text19">
                        We offer comprehensive IT solutions to optimize your
                        business operations, enhance productivity, and
                        streamline processes.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features16-feature3">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3"
              />
              <div className="features16-content5">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features16-text21">
                        Construction Services
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features16-text14">
                        Pranav Associates specializes in providing top-notch
                        construction services for various projects, ensuring
                        quality workmanship and timely completion.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features16.defaultProps = {
  content1: undefined,
  feature3Description: undefined,
  feature2ImageAlt: 'IT Solutions Image',
  feature3ImageAlt: 'Construction Services Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1710367847938-c92cf56a7a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDQ4Nzg2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: undefined,
  feature1Description: undefined,
  slogan1: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1511401139252-f158d3209c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDQ4Nzg2NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Installation Services Image',
  feature2Title: undefined,
  feature2Description: undefined,
  heading1: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1626201308709-b48068221509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDQ4Nzg2NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
}

Features16.propTypes = {
  content1: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  slogan1: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature2Description: PropTypes.element,
  heading1: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature3Title: PropTypes.element,
}

export default Features16
