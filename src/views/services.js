import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Card from '../components/card'
import './services.css'

const Services = (props) => {
  return (
    <div className="services-container10">
      <Helmet>
        <title>Services - Pranav Associates</title>
        <meta
          name="description"
          content="Unleashing excellence through a diverse spectrum of services. From security solutions to customized furniture and more. Elevate your experience with us."
        />
        <meta property="og:title" content="Services - Pranav Associates" />
        <meta
          property="og:description"
          content="Unleashing excellence through a diverse spectrum of services. From security solutions to customized furniture and more. Elevate your experience with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/37889103-c5cc-46b4-9ef4-7f0951caecba/94b76471-4d3d-436e-92d2-a1f0ca9e1648?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <Navbar
        text={
          <Fragment>
            <span className="services-text100 brandName">
              <span className="services-text101">PranaV</span>
              <br></br>
              <span>ASsociates</span>
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="services-text104 navbarLink">Home</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="services-text105 navbarLink">Our Services</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="services-text106 navbarLink">About Us</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="services-text107 navbarLink">Home</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="services-text108 navbarLink">Our Services</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="services-text109 navbarLink">About Us</span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="services-text110">Connect with Us</span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="services-text111">Connect with Us</span>
          </Fragment>
        }
        rootClassName="navbarroot-class-name"
      ></Navbar>
      <div className="services-hero hero-container section-container">
        <div className="services-max-width1 max-width">
          <div className="services-content1">
            <span className="services-subtitle beforeHeading">
              PRANAV ASSOCIATES
            </span>
            <h1 className="services-title1">
              <span>
                Unlock the next generation banking
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="services-text113">experience</span>
            </h1>
            <span className="services-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className="services-container11">
              <button className="button button-gradient">Get started</button>
              <button className="button button-transparent">Log in</button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container services-section1">
        <div className="services-max-width2 max-width">
          <div className="services-image1">
            <img
              alt="image"
              src="/group%2020-1200w.png"
              className="services-hero-image1"
            />
          </div>
          <div className="services-content2">
            <span className="services-text114 beforeHeading">how it works</span>
            <h1 className="services-text115">
              <span>
                Pay and get paid
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="services-text117">
                faster
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>than ever.</span>
            </h1>
            <span className="services-text119">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className="services-container12">
              <button className="button-secondary button bg-transparent">
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div className="services-section2 section-container">
          <div className="services-max-width3 max-width">
            <div className="services-image2">
              <img
                alt="image"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/37889103-c5cc-46b4-9ef4-7f0951caecba/bf87ccc7-47bc-4d49-a14b-c0efa6b1ee6f?org_if_sml=1&amp;q=8096721&amp;force_format=original"
                className="services-hero-image2"
              />
            </div>
            <div className="services-content3">
              <span className="services-text120">get started</span>
              <h1 className="services-text121">Our Installation Services</h1>
              <div className="services-step1">
                <div className="services-number1">
                  <span className="services-text122">1</span>
                </div>
                <div className="services-container13">
                  <span className="services-title2">
                    Air-Conditioning Systems
                  </span>
                  <span className="services-text123">
                    <span>Efficient AC Systems Supply and Installation</span>
                    <br></br>
                    <span>
                      Comprehensive Annual Maintenance Contracts (AMCs)
                    </span>
                  </span>
                </div>
              </div>
              <div className="services-step2">
                <div className="services-number2">
                  <span className="services-text127">2</span>
                </div>
                <div className="services-container14">
                  <span className="services-title3">
                    Security &amp; Surveillance Systems
                  </span>
                  <span className="services-text128">
                    <span>CCTV: Installation, Maintenance, and Upgrades</span>
                    <br></br>
                    <span>
                      Access Control: Biometric Readers, Smart Cards, Keypads
                    </span>
                    <br></br>
                    <span>
                      Intrusion Detection: Alarms, Motion Sensors, Perimeter
                      Security
                    </span>
                  </span>
                </div>
              </div>
              <div className="services-step3">
                <div className="services-number3">
                  <span className="services-text134">3</span>
                </div>
                <div className="services-container15">
                  <span className="services-title4">
                    Industrial RO Water Plants:
                  </span>
                  <span className="services-text135">
                    <span>Assembling, Installation, and Commissioning</span>
                    <br></br>
                    <span>Ongoing Maintenance Services</span>
                    <br></br>
                    <span>
                      Annual Maintenance Contracts (AMCs) for RO Systems
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-section3 section-container">
        <div className="services-max-width4 max-width">
          <div className="services-content4">
            <span className="services-text141 beforeHeading">save money</span>
            <h1 className="services-text142">
              <span className="services-text143">Earn cashback</span>
              <br></br>
              <span className="services-text145">
                from your favorite brands
              </span>
            </h1>
            <span className="services-text146">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </span>
            <div className="services-container16">
              <button className="button-secondary button bg-transparent">
                See how
              </button>
            </div>
          </div>
          <div className="services-image3">
            <img
              alt="image"
              src="/group%2021-1200w.png"
              className="services-hero-image3"
            />
          </div>
        </div>
      </div>
      <div className="services-section4 section-container">
        <div className="services-max-width5 max-width">
          <div className="services-image4">
            <img
              alt="image"
              src="/jc-gellidon-fnc3yctccoi-unsplash%2014%20%5B1%5D-1200w.png"
              className="services-hero-image4"
            />
          </div>
          <div className="services-content5">
            <span className="services-text147 beforeHeading">get started</span>
            <h1 className="services-text148">Open your account today</h1>
            <div className="services-step4">
              <div className="services-number4">
                <span className="services-text149">1</span>
              </div>
              <div className="services-container17">
                <span className="services-title5">Download UpStart App</span>
                <span className="services-text150">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className="services-step5">
              <div className="services-number5">
                <span className="services-text151">2</span>
              </div>
              <div className="services-container18">
                <span className="services-title6">
                  Create your free account
                </span>
                <span className="services-text152">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
            <div className="services-step6">
              <div className="services-number6">
                <span className="services-text153">3</span>
              </div>
              <div className="services-container19">
                <span className="services-title7">
                  Link your existing credit cards
                </span>
                <span className="services-text154">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="services-max-width6 max-width">
          <span className="services-text155 beforeHeading">get started</span>
          <h1 className="services-text156">
            <span>No matter what you do,</span>
            <br></br>
            <span>UpStart will save you money</span>
          </h1>
          <div className="services-cards-container">
            <Card rootClassName="cardroot-class-name3"></Card>
            <Card text="Personal" rootClassName="cardroot-class-name4"></Card>
            <Card text="Family" rootClassName="cardroot-class-name5"></Card>
          </div>
        </div>
      </div>
      <div className="services-section6 section-container">
        <div className="services-max-width7 max-width">
          <div className="services-faq">
            <div className="services-questions">
              <span className="services-text159 beforeHeading">faq</span>
              <h1 className="services-text160">
                <span className="services-text161">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="services-text163">Questions</span>
              </h1>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="services-trigger1">
                  <span className="services-text164">
                    Is this a Free or Paid service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="services-icon1">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="services-text165">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="services-trigger2">
                  <span className="services-text166">
                    Do you operate in United Stated?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="services-icon3">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="services-text167">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="services-trigger3">
                  <span className="services-text168">
                    Is this a globally available bank?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="services-icon5">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="services-text169">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="services-trigger4">
                  <span className="services-text170">
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="services-icon7">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="services-text171">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/group%202-1200w.png"
              className="services-image5"
            />
          </div>
          <div className="services-banner">
            <span className="services-text172 beforeHeading">get started</span>
            <h1 className="services-text173">
              <span>Push your finances to</span>
              <br></br>
              <span>the next level.</span>
            </h1>
            <span className="services-text177">
              <span>
                Amet minim mollit non deserunt ullamco est sit
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                aliqua dolor do amet sint.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className="services-btns">
              <button className="services-button5 button button-transparent">
                See all plans
              </button>
              <button className="services-button6 button button-gradient">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="services-footer">
        <div className="services-links-container">
          <div className="services-container20">
            <div className="footer-column">
              <span className="services-text181">Product</span>
              <span className="services-text182">How it works</span>
              <span className="services-text183">Features</span>
              <span className="services-text184">Pricing</span>
              <span className="services-text185">Blog</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="services-text187">Company</span>
              <span className="services-text188">About us</span>
              <span className="services-text189">Culture</span>
              <span className="services-text190">Code of conduct</span>
              <span className="services-text191">Careers</span>
              <span className="services-text192">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="services-text194">Security</span>
              <span className="services-text195">Security status</span>
              <span className="services-text196">ISO</span>
              <span className="services-text197">System status</span>
              <span>Customer Help</span>
            </div>
            <div className="footer-column">
              <span className="services-text199">Follow</span>
              <span className="services-text200">Instagram</span>
              <span className="services-text201">Twitter</span>
              <span className="services-text202">Facebook</span>
              <span className="services-text203">Tik Tok</span>
              <span className="services-text204">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Services
