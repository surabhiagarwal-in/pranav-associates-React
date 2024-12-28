import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FeatureCard4 from '../components/feature-card4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Pranav Associates</title>
        <meta
          name="description"
          content="Unleashing excellence through a diverse spectrum of services. From security solutions to customized furniture and more. Elevate your experience with us."
        />
        <meta property="og:title" content="Pranav Associates" />
        <meta
          property="og:description"
          content="Unleashing excellence through a diverse spectrum of services. From security solutions to customized furniture and more. Elevate your experience with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/37889103-c5cc-46b4-9ef4-7f0951caecba/94b76471-4d3d-436e-92d2-a1f0ca9e1648?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <Link to="/" className="home-navlink">
        <Navbar
          text={
            <Fragment>
              <span className="home-text100 brandName">
                <span className="home-text101">PranaV</span>
                <br></br>
                <span>ASsociates</span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text104 navbarLink">Home</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text105 navbarLink">Our Services</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text106 navbarLink">About Us</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text107 navbarLink">Home</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text108 navbarLink">Our Services</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text109 navbarLink">About Us</span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="home-text110">Connect with Us</span>
            </Fragment>
          }
          button1={
            <Fragment>
              <span className="home-text111">Connect with Us</span>
            </Fragment>
          }
          rootClassName="navbarroot-class-name2"
          className="home-component1"
        ></Navbar>
      </Link>
      <section className="home-hero hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content1">
            <span className="home-subtitle beforeHeading">
              welcome to PRANAV ASSOCIATES
            </span>
            <h1 className="home-title1">
              <span>
                Unlock the next generation
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text113">service </span>
              <span className="home-text114">e</span>
              <span className="home-text115">xperience</span>
            </h1>
            <span className="home-description">
              Step into a world of reliability, and seamless solutions. At
              Pranav Associates, we don&apos;t just offer a diverse range of
              services; we offer experiences crafted for a lasting impact.
            </span>
            <div className="home-container11">
              <button className="button button-gradient">Get started</button>
            </div>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="/pexels-los-muertos-crew-8853471-1500h.jpg"
              className="home-hero-image1"
            />
            <img
              alt="hero-bottom-graphic"
              src="/group%2018-1200w.png"
              className="home-hero-bottom-graphic"
            />
            <img
              alt="hero-top-graphic"
              src="/union-400w.png"
              className="home-hero-top-graphic"
            />
          </div>
        </div>
      </section>
      <div className="home-section1 section-container">
        <div className="home-max-width2 max-width">
          <div className="home-image2">
            <img
              alt="image"
              src="/pexels-ksenia-chernaya-5691502-1500w.jpg"
              className="home-hero-image2"
            />
          </div>
          <div className="home-content2">
            <span className="home-text116 beforeHeading">why choose us</span>
            <h1 className="home-text117">
              <span>
                Continuous
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                Care
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>&amp; </span>
              <span className="home-text121">Lasting</span>
              <span className="home-text122">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text123">
                Value
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text124">
                with our
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text125">AMCs</span>
            </h1>
            <span className="home-text126">
              <span>
                Experience uninterrupted efficiency and peace of mind with our
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text128">Annual Maintenance Contracts</span>
              <span>
                —your gateway to proactive care, ensuring your assets perform at
                their peak, year after year.
              </span>
            </span>
            <div className="home-container12">
              <button className="home-button2 button-secondary button bg-transparent">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section2 section-container">
        <div className="home-max-width3 max-width">
          <div className="home-content3">
            <span className="home-text130 beforeHeading">72 hour promise</span>
            <h1 className="home-text131">
              <span className="home-text132">No location too far</span>
              <span className="home-text133"> </span>
              <span>for our service team</span>
            </h1>
            <span className="home-text135">
              What sets us apart is our ability to extend this commitment even
              to remote locations esp. in the northeast, with a 72-hour service
              promise—making excellence accessible, no matter where you are.
            </span>
            <div className="home-container13">
              <button className="home-button3 button-secondary button bg-transparent">
                See how
              </button>
            </div>
          </div>
          <div className="home-image3">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1628863965955-26e57846fc4c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxhcnVuYWNoYWx8ZW58MHx8fHwxNzA4Njg1OTcyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="home-hero-image3"
            />
          </div>
        </div>
      </div>
      <div className="home-section3 section-container">
        <div className="home-features1">
          <h1 className="home-text136">
            <span>Discover our</span>
            <br></br>
            <span>installation services</span>
          </h1>
          <div className="home-separator"></div>
          <div className="home-container14">
            <div className="home-container15">
              <FeatureCard4
                title="Air-Conditioning Systems"
                description="Efficient AC Systems Supply and Installation with Comprehensive Annual Maintenance Contracts (AMCs)"
                rootClassName="rootClassName1"
              ></FeatureCard4>
              <FeatureCard4
                title="Industrial RO Water Plants"
                description="Assembling, Installation, and Commissioning along with ongoing Annual Maintenance Contracts (AMCs) for RO Systems"
                rootClassName="rootClassName4"
              ></FeatureCard4>
              <FeatureCard4
                title="Security &amp; Surveillance Systems"
                description="Installation, Maintenance, and Upgrades of CCTV, Access Control &amp; Intrusion Detection Systems."
                rootClassName="rootClassName3"
              ></FeatureCard4>
              <FeatureCard4
                title="Wire Fencing Products"
                description="High-Quality Fencing wire manufacturing and Security Fencing Solutions for Various Applications"
                rootClassName="rootClassName2"
              ></FeatureCard4>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1604754742629-3e5728249d73?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI2fHxzeXN0ZW18ZW58MHx8fHwxNzA5MTM0NDYwfDA&amp;ixlib=rb-4.0.3&amp;w=500"
              className="home-image4"
            />
          </div>
        </div>
      </div>
      <div className="home-section4 section-container">
        <div className="home-banner1">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fG1pbmltYWxpc20lMjB5ZWxsb3d8ZW58MHx8fHwxNjI2MTg0NjU3&amp;ixlib=rb-1.2.1&amp;w=300"
            className="home-image5"
          />
          <div className="home-container16">
            <h1 className="home-text140">
              Get state-of-the-art comprehensive IT solutions
            </h1>
            <span className="home-text141">
              <span>
                Hardware and Software Solutions, Network Consulting and Repair
                Services
              </span>
              <br></br>
              <span>
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
            <ul className="Content list home-ul">
              <li className="home-li1 list-item">
                <span className="home-text146">
                  Best quality and tailor-made Design, Install, On-call Repair
                  &amp; Troubleshooting
                </span>
              </li>
              <li className="home-li2 list-item">
                <span className="home-text147">
                  Catering to Corporates, Ministries, Government, Defence
                  Department and PSUs
                </span>
              </li>
              <li className="home-li3 list-item">
                <span className="home-text148">
                  Professional Technicians. Qualified Experts.
                </span>
              </li>
              <li className="home-li4 list-item">
                <span className="home-text149">
                  Best Prices. Speedy Visits.
                </span>
              </li>
              <li className="home-li5 list-item">
                <span className="home-text150">
                  Annual Maintenance Contracts.
                </span>
              </li>
            </ul>
            <span className="home-text151">
              <span>
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
            <div className="home-container17">
              <button className="home-button4 button">
                <span>
                  <span>Know More</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section5 section-container">
        <div className="home-max-width4 max-width">
          <div className="home-content4">
            <h1 className="home-text157">Our Construction Services</h1>
            <div className="home-step1">
              <div className="home-number1">
                <span className="home-text158">1</span>
              </div>
              <div className="home-container18">
                <span className="home-title2">Epoxy Flooring</span>
                <span className="home-text159">
                  <span>Installation of Durable Epoxy Flooring</span>
                  <br></br>
                  <span>Annual Maintenance Contracts (AMCs)</span>
                </span>
              </div>
            </div>
            <div className="home-step2">
              <div className="home-number2">
                <span className="home-text163">2</span>
              </div>
              <div className="home-container19">
                <span className="home-title3">
                  Prefabricated Structures &amp; Cold Storage
                </span>
                <span className="home-text164">
                  <span>Prefabricated House &amp; Building Supply</span>
                  <br></br>
                  <span>Cold Storage Solutions: Rooms, Doors, Systems</span>
                  <br></br>
                  <span>
                    Expert Installation and Maintenance Services for PUF Panels
                  </span>
                </span>
              </div>
            </div>
            <div className="home-step3">
              <div className="home-number3">
                <span className="home-text170">3</span>
              </div>
              <div className="home-container20">
                <span className="home-title4">
                  Civil Works &amp; Construction Services
                </span>
                <span className="home-text171">
                  <span>Residential, Commercial, and Industrial Projects</span>
                  <br></br>
                  <span>Renovation, Interior Design, and New Construction</span>
                  <br></br>
                  <span>
                    Turnkey Civil Contractor Services for Various Structures
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="home-image6">
            <img
              alt="image"
              src="/construction-1500w.jpeg"
              className="home-hero-image4"
            />
          </div>
        </div>
      </div>
      <div className="home-section6 section-container">
        <div className="home-features2">
          <h1 className="home-text177">
            Custom and Ready-made furniture solutions
          </h1>
        </div>
        <div className="home-container21">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="home-image7"
          />
          <h1>Heading</h1>
        </div>
      </div>
      <div className="home-section7 section-container">
        <div className="home-max-width5 max-width">
          <div className="home-faq">
            <div className="home-questions">
              <span className="home-text179 beforeHeading">faq</span>
              <h1 className="home-text180">
                <span className="home-text181">
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="home-text183">Questions</span>
              </h1>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger1">
                  <span className="home-text184">
                    Is this a Free or Paid service?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon1">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text185">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger2">
                  <span className="home-text186">
                    Do you operate in United Stated?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon3">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text187">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger3">
                  <span className="home-text188">
                    Is this a globally available bank?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon5">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text189">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </span>
                </div>
              </div>
              <div data-role="Accordion" className="question">
                <div data-type="accordion-header" className="home-trigger4">
                  <span className="home-text190">
                    Do you have an iOS or Android app?
                  </span>
                  <svg viewBox="0 0 1024 1024" className="home-icon7">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content" className="question-content">
                  <span className="home-text191">
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
              className="home-image8"
            />
          </div>
          <div className="home-banner2">
            <span className="home-text192 beforeHeading">get started</span>
            <h1 className="home-text193">
              <span>Seamless Future</span>
              <br></br>
              <span>Unlocked</span>
            </h1>
            <span className="home-text197">
              Elevate Your Service Experience with our Next-Gen Services
            </span>
            <div className="home-btns">
              <button className="home-button5 button button-gradient">
                Connect with Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container22">
            <div className="footer-column">
              <span className="home-text198">Product</span>
              <span className="home-text199">How it works</span>
              <span className="home-text200">Features</span>
              <span className="home-text201">Pricing</span>
              <span className="home-text202">Blog</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="home-text204">App</span>
              <span className="home-text205">Download iOS app</span>
              <span className="home-text206">Download Android app</span>
              <span className="home-text207">Log in to Portal</span>
              <span className="home-text208">Administrative</span>
              <span>Legal</span>
            </div>
            <div className="footer-column">
              <span className="home-text210">Company</span>
              <span className="home-text211">About us</span>
              <span className="home-text212">Culture</span>
              <span className="home-text213">Code of conduct</span>
              <span className="home-text214">Careers</span>
              <span className="home-text215">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="home-text217">Invest</span>
              <span className="home-text218">Commodity</span>
              <span className="home-text219">Savings</span>
              <span className="home-text220">
                <span>Taxes and fees</span>
                <br></br>
                <span></span>
              </span>
              <span className="home-text223">
                <span>Currency exchange</span>
              </span>
              <span>Community</span>
            </div>
            <div className="footer-column">
              <span className="home-text226">Security</span>
              <span className="home-text227">Security status</span>
              <span className="home-text228">ISO</span>
              <span className="home-text229">System status</span>
              <span>Customer Help</span>
            </div>
            <div className="footer-column">
              <span className="home-text231">Follow</span>
              <span className="home-text232">Instagram</span>
              <span className="home-text233">Twitter</span>
              <span className="home-text234">Facebook</span>
              <span className="home-text235">Tik Tok</span>
              <span className="home-text236">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
