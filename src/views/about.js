import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Banner1 from '../components/banner1'
import Features16 from '../components/features16'
import Logos8 from '../components/logos8'
import Team14 from '../components/team14'
import CTA15 from '../components/cta15'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container1">
      <Helmet>
        <title>About - Pranav Associates</title>
        <meta
          name="description"
          content="Unleashing excellence through a diverse spectrum of services. From security solutions to customized furniture and more. Elevate your experience with us."
        />
        <meta property="og:title" content="About - Pranav Associates" />
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
            <span className="about-text10 brandName">
              <span className="about-text11">PranaV</span>
              <br></br>
              <span>ASsociates</span>
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="about-text14 navbarLink">Home</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="about-text15 navbarLink">Our Services</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="about-text16 navbarLink">About Us</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="about-text17 navbarLink">Home</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="about-text18 navbarLink">Our Services</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="about-text19 navbarLink">About Us</span>
          </Fragment>
        }
        button={
          <Fragment>
            <span className="about-text20">Connect with Us</span>
          </Fragment>
        }
        button1={
          <Fragment>
            <span className="about-text21">Connect with Us</span>
          </Fragment>
        }
        rootClassName="navbarroot-class-name1"
      ></Navbar>
      <Banner1
        action1={
          <Fragment>
            <span className="about-text22">Explore Our Services</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text23">
              Your one-stop solution for high-tech installation services,
              maintenance contracts, custom and ready-made furniture and more.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text24">Welcome to Pranav Associates</span>
          </Fragment>
        }
        rootClassName="banner1root-class-name"
      ></Banner1>
      <Features16
        slogan1={
          <Fragment>
            <span className="about-text25">Slogan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text26">
              <span>
                Headquartered in Guwahati, Assam, Pranav Associates is a
                pioneering force in Northeast India, offering a comprehensive
                suite of solutions across security, technology, infrastructure,
                and industrial applications. With a footprint extending across
                the entire North Eastern region, we bring over
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="about-text28">eight years</span>
              <span>
                {' '}
                of specialised expertise in IT sales, technical support, and
                service delivery.
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text30">
              Custom and Ready-Made Tech Solutions
            </span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-text31">Installation Services</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-text32">IT Solutions</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-text33">Construction Services</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text34">
              Our team provides professional installation services for all the
              products we offer, ensuring a seamless and hassle-free experience
              for our clients.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text35">
              We offer comprehensive IT solutions to optimize your business
              operations, enhance productivity, and streamline processes.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text36">
              Pranav Associates specializes in providing top-notch construction
              services for various projects, ensuring quality workmanship and
              timely completion.
            </span>
          </Fragment>
        }
      ></Features16>
      <Logos8
        content1={
          <Fragment>
            <span className="about-text37">
              <span>
                Our clients range from prestigious
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="about-text39">
                defence establishments, government departments
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>and</span>
              <span className="about-text41">
                {' '}
                public sector undertakings (PSUs)
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>to</span>
              <span className="about-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>leading</span>
              <span className="about-text45"> private firms</span>
              <span>
                , testifying to the trust and confidence our clients place in
                us.
              </span>
              <br></br>
              <br></br>
              <span>
                Our dedicated team is committed to delivering high-quality
                products and services backed by deep industry knowledge and
                extensive experience working with defence establishments,
                government departments, PSUs and leading private companies. This
                experience has equipped us to handle projects of varied
                complexity and scale, ensuring each client receives a solution
                tailored to their unique needs.
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text50">Trusted by Companies</span>
          </Fragment>
        }
        logo1Alt="Defence"
        logo1Src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Armed_forces_logo.svg"
        logo2Alt="Government"
        logo2Src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
        logo3Alt="Defence"
        logo3Src="https://qnextech.com/wp-content/uploads/2024/08/NDP-20.webp"
        logo4Alt="Stores"
        logo4Src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVLbtHlPaOQdu4ArxHFwAMqHUxD0OYse8dQ&amp;s"
        logo5Alt="India"
        logo5Src="https://aceprefab.com/newsite/wp-content/uploads/2023/02/ARMY-SHELTER.jpeg"
        logo6Alt="Schools"
        logo6Src="https://www.globalgiving.org/pfil/29291/ph_29291_106375.jpg"
        logo7Src="https://www.deltadisplays.com/wp-content/uploads/2021/11/01-Delta-Display-Solutions-at-BBNL-Network-Operation-Center.jpg"
        logo8Alt="Hotels"
        logo8Src="https://images.pexels.com/photos/5860693/pexels-photo-5860693.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
        rootClassName="logos8root-class-name"
      ></Logos8>
      <Team14
        text={
          <Fragment>
            <span className="about-text51">Default value</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text52">
              <span>
                Pranav Associates was founded in
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="about-text54">2017</span>
              <span>
                {' '}
                by Mr. Vineet Garodia with a passion for bringing transformative
                technologies to the Northeast. With a strong commitment to
                quality, innovation, and customer satisfaction, Mr. Garodia
                envisioned creating a robust ecosystem where establishments in
                North Eastern States of India have access to world-class
                solutions that enhance productivity, security, and
                sustainability.
              </span>
              <br></br>
              <br></br>
              <span>
                Being the first Northeast-based firm to offer such a
                comprehensive suite of services and solutions involves
                travelling countless uncharted paths. Hence, at Pranav
                Associates, we have built an environment of continuous
                improvement and adaptability. This approach keeps us at the
                forefront of industry trends and ensures we are always equipped
                to meet the evolving needs of our clients.
              </span>
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
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text61">The Team</span>
          </Fragment>
        }
        member1Src="https://images.unsplash.com/photo-1503422673044-f82d00443ad3?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDUzMzc0OXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        rootClassName="team14root-class-name"
      ></Team14>
      <CTA15
        action1={
          <Fragment>
            <span className="about-text62">Contact Us</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text63">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text64">
              Contact us now to discuss your furniture, IT, construction, or
              maintenance needs.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text65">Get in touch with us today!</span>
          </Fragment>
        }
        rootClassName="cta15root-class-name"
      ></CTA15>
      <footer className="about-footer">
        <div className="about-links-container">
          <div className="about-container2">
            <div className="footer-column">
              <span className="about-text66">Product</span>
              <span className="about-text67">How it works</span>
              <span className="about-text68">Features</span>
              <span className="about-text69">Pricing</span>
              <span className="about-text70">Blog</span>
              <span>FAQ</span>
            </div>
            <div className="footer-column">
              <span className="about-text72">App</span>
              <span className="about-text73">Download iOS app</span>
              <span className="about-text74">Download Android app</span>
              <span className="about-text75">Log in to Portal</span>
              <span className="about-text76">Administrative</span>
              <span>Legal</span>
            </div>
            <div className="footer-column">
              <span className="about-text78">Company</span>
              <span className="about-text79">About us</span>
              <span className="about-text80">Culture</span>
              <span className="about-text81">Code of conduct</span>
              <span className="about-text82">Careers</span>
              <span className="about-text83">News</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="about-text85">Invest</span>
              <span className="about-text86">Commodity</span>
              <span className="about-text87">Savings</span>
              <span className="about-text88">
                <span>Taxes and fees</span>
                <br></br>
                <span></span>
              </span>
              <span className="about-text91">
                <span>Currency exchange</span>
              </span>
              <span>Community</span>
            </div>
            <div className="footer-column">
              <span className="about-text94">Security</span>
              <span className="about-text95">Security status</span>
              <span className="about-text96">ISO</span>
              <span className="about-text97">System status</span>
              <span>Customer Help</span>
            </div>
            <div className="footer-column">
              <span className="about-text99">Follow</span>
              <span className="about-text100">Instagram</span>
              <span className="about-text101">Twitter</span>
              <span className="about-text102">Facebook</span>
              <span className="about-text103">Tik Tok</span>
              <span className="about-text104">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default About
