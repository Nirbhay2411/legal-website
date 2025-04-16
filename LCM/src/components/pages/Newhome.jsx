import React from 'react'
import "../../assets/css/Home.css";
import { Link } from "react-router-dom";
import UserNavbar from "../layouts/UserNavbar";
export const newhome = () => {
  return (
    <>
    {/* PAGE LOADING
      ================================================== */}
    {/* MAIN WRAPPER
      ================================================== */}
    <div className="main-wrapper">
      {/* HEADER
    ================================================== */}
      <header className="header-style1 menu_area-light fixedHeader">
        <div className="navbar-default border-bottom border-color-light-white">
          {/* start top search */}
          <div className="top-search bg-primary">
            <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
              <form
                className="search-form"
                action="search.html"
                method="GET"
                acceptCharset="utf-8"
              >
                <div className="input-group">
                  <span className="input-group-addon cursor-pointer">
                    <button
                      className="search-form_submit fas fa-search text-white"
                      type="submit"
                    />
                  </span>
                  <input
                    type="text"
                    className="search-form_input form-control"
                    name="s"
                    autoComplete="off"
                    placeholder="Type & hit enter..."
                  />
                  <span className="input-group-addon close-search mt-1">
                    <i className="fas fa-times" />
                  </span>
                </div>
              </form>
            </div>
          </div>
          {/* end top search */}
          <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
            <div className="row align-items-center">
              <div className="col-12 col-lg-12">
                <div className="menu_area alt-font">
                  <nav className="navbar navbar-expand-lg navbar-light p-0 current">
                    <div className="navbar-header navbar-header-custom">
                      {/* start logo */}
                      <a href="index.html" className="navbar-brand">
                        <img
                          id="logo"
                          src="img/logos/logo-inner.png"
                          alt="logo"
                        />
                      </a>
                      {/* end logo */}
                    </div>
                    <div className="navbar-toggler" />
                    {/* start menu area */}
                    <ul className="navbar-nav ms-auto" id="nav" style={{}}>
                      <li className="has-sub current">
                        <span className="submenu-button" />
                        <a href="#!">Home</a>
                        <ul className="sub-menu">
                          <li className="active">
                            <a href="index.html">Home 01</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home 02</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home 03</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-sub">
                        <span className="submenu-button" />
                        <a href="#!">Pages</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="our-history.html">Our History</a>
                          </li>
                          <li>
                            <a href="achievements.html">Achievements</a>
                          </li>
                          <li className="has-sub">
                            <span className="submenu-button" />
                            <a href="#!">Our Attorneys</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="our-attorneys.html">Our Attorneys</a>
                              </li>
                              <li>
                                <a href="attorney-details.html">
                                  Attorney Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-sub">
                            <span className="submenu-button" />
                            <a href="#!">Additional Pages</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="testimonial.html">Testimonial</a>
                              </li>
                              <li>
                                <a href="our-pricing.html">Our Pricing</a>
                              </li>
                              <li>
                                <a href="faq.html">FAQ</a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-sub">
                            <span className="submenu-button" />
                            <a href="#!">Others</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="coming-soon.html">Comingsoon</a>
                              </li>
                              <li>
                                <a href="404-page.html">404 Page</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-sub">
                        <span className="submenu-button" />
                        <a href="#!">Services</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="services.html">Our Services</a>
                          </li>
                          <li>
                            <a href="business-law.html">Business Law</a>
                          </li>
                          <li>
                            <a href="criminal-law.html">Criminal Law</a>
                          </li>
                          <li>
                            <a href="divorce-law.html">Divorce Law</a>
                          </li>
                          <li>
                            <a href="education-law.html">Education Law</a>
                          </li>
                          <li>
                            <a href="family-law.html">Family Law</a>
                          </li>
                          <li>
                            <a href="insurance-law.html">Insurance Law</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-sub">
                        <span className="submenu-button" />
                        <a href="#!">Case Study</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="case-study-3-col.html">Case Study 3 Col</a>
                          </li>
                          <li>
                            <a href="case-study-4-col.html">Case Study 4 Col</a>
                          </li>
                          <li>
                            <a href="case-study-details.html">
                              Case Study Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-sub">
                        <span className="submenu-button" />
                        <a href="#!">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog-list.html">Blog List</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-sub">
                        <span className="submenu-button" />
                        <a href="#!">Elements</a>
                        <ul className="row megamenu sub-menu">
                          <li className="col-lg-3 col-sm-12 has-sub">
                            <span className="submenu-button" />
                            <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-800">
                              Elements 01
                            </span>
                            <ul className="sub-menu">
                              <li>
                                <a href="accordion.html">
                                  <i className="fas fa-sliders-h me-2" />
                                  Accordion
                                </a>
                              </li>
                              <li>
                                <a href="alerts.html">
                                  <i className="far fa-bell me-2" />
                                  Alerts
                                </a>
                              </li>
                              <li>
                                <a href="blockquotes.html">
                                  <i className="fas fa-vector-square me-2" />
                                  Blockquotes
                                </a>
                              </li>
                              <li>
                                <a href="buttons.html">
                                  <i className="fas fa-link me-2" />
                                  Buttons
                                </a>
                              </li>
                              <li>
                                <a href="call-to-action.html">
                                  <i className="far fa-square me-2" />
                                  Call to Action
                                </a>
                              </li>
                              <li>
                                <a href="carousel-slider.html">
                                  <i className="far fa-images me-2" />
                                  Carousel Slider
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="col-lg-3 col-sm-12 has-sub">
                            <span className="submenu-button" />
                            <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-800">
                              Elements 02
                            </span>
                            <ul className="sub-menu">
                              <li>
                                <a href="count-down.html">
                                  <i className="far fa-flag me-2" />
                                  Count Down
                                </a>
                              </li>
                              <li>
                                <a href="counters.html">
                                  <i className="fas fa-compress me-2" />
                                  Counters
                                </a>
                              </li>
                              <li>
                                <a href="dropcaps.html">
                                  <i className="far fa-closed-captioning me-2" />
                                  Dropcaps
                                </a>
                              </li>
                              <li>
                                <a href="forms.html">
                                  <i className="fab fa-wpforms me-2" />
                                  Forms
                                </a>
                              </li>
                              <li>
                                <a href="font-icons.html">
                                  <i className="far fa-check-square me-2" />
                                  Font Icons
                                </a>
                              </li>
                              <li>
                                <a href="google-map.html">
                                  <i className="fas fa-map-marker-alt me-2" />
                                  Google Map
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="col-lg-3 col-sm-12 has-sub">
                            <span className="submenu-button" />
                            <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-800">
                              Elements 03
                            </span>
                            <ul className="sub-menu">
                              <li>
                                <a href="grid-system.html">
                                  <i className="fas fa-th me-2" />
                                  Grid System
                                </a>
                              </li>
                              <li>
                                <a href="highlights.html">
                                  <i className="fas fa-highlighter me-2" />
                                  Highlights
                                </a>
                              </li>
                              <li>
                                <a href="icon-with-text.html">
                                  <i className="fab fa-fonticons-fi me-2" />
                                  Icon With Text
                                </a>
                              </li>
                              <li>
                                <a href="list-styles.html">
                                  <i className="fas fa-list-ul me-2" />
                                  List Styles
                                </a>
                              </li>
                              <li>
                                <a href="media-object.html">
                                  <i className="fas fa-photo-video me-2" />
                                  Media Object
                                </a>
                              </li>
                              <li>
                                <a href="modal.html">
                                  <i className="fas fa-expand me-2" />
                                  Modal
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="col-lg-3 col-sm-12 has-sub">
                            <span className="submenu-button" />
                            <span className="mb-0 mb-lg-3 d-block py-2 p-lg-0 px-4 px-lg-0 text-uppercase sub-title font-weight-800">
                              Elements 04
                            </span>
                            <ul className="sub-menu">
                              <li>
                                <a href="pagination.html">
                                  <i className="far fa-caret-square-right me-2" />
                                  Pagination
                                </a>
                              </li>
                              <li>
                                <a href="progress-bars.html">
                                  <i className="fas fa-tasks me-2" />
                                  Progress Bars
                                </a>
                              </li>
                              <li>
                                <a href="tables.html">
                                  <i className="fas fa-table me-2" />
                                  Tables
                                </a>
                              </li>
                              <li>
                                <a href="tabs.html">
                                  <i className="fas fa-sliders-h me-2" />
                                  Tabs
                                </a>
                              </li>
                              <li>
                                <a href="typography.html">
                                  <i className="fas fa-text-height me-2" />
                                  Typography
                                </a>
                              </li>
                              <li>
                                <a href="videos.html">
                                  <i className="fas fa-video me-2" />
                                  Videos
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    {/* end menu area */}
                    {/* start attribute navigation */}
                    <div className="attr-nav align-items-xl-center ms-xl-auto main-font">
                      <ul>
                        <li className="search">
                          <a href="#!">
                            <i className="fas fa-search" />
                          </a>
                        </li>
                        <li className="d-none d-xl-inline-block">
                          <a href="contact.html" className="butn md text-white">
                            Free Consultation
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* end attribute navigation */}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* BANNER
    ================================================== */}
      <div className="slider-fade banner1 top-position1">
        <div className="owl-carousel owl-theme w-100 owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(-2804px, 0px, 0px)",
                transition: "all",
                width: 4907
              }}
            >
              <div
                className="owl-item animated owl-animated-out fadeOut cloned"
                style={{ width: 701, left: 690 }}
              >
                <div
                  className="text-center item bg-img secondary-overlay"
                  data-overlay-dark={8}
                  data-background="img/banner/banner-02.jpg"
                  style={{ backgroundImage: 'url("img/banner/banner-02.jpg")' }}
                >
                  <div className="container h-100">
                    <div className="d-table h-100 w-100">
                      <div className="d-table-cell align-middle caption">
                        <div className="w-md-75 mx-auto">
                          <span className="sub-title">Introduce lawsight</span>
                          <h1 className="">
                            We are here to secure any sort of violence
                          </h1>
                          <p className="w-lg-80 mx-auto">
                            We give best law administration to customers and
                            attempt to accomplish our customers trust.
                          </p>
                          <a
                            href="about.html"
                            className="butn butn-white butn-hover"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: 701 }}>
                <div
                  className="text-end item bg-img secondary-overlay"
                  data-overlay-dark={8}
                  data-background="img/banner/banner-03.jpg"
                  style={{ backgroundImage: 'url("img/banner/banner-03.jpg")' }}
                >
                  <div className="container h-100">
                    <div className="d-table h-100 w-100">
                      <div className="d-table-cell align-middle caption">
                        <div className="overflow-hidden w-95 w-md-85 w-lg-75">
                          <span className="sub-title">
                            Strong team of leaders
                          </span>
                          <h1 className="">
                            Finest &amp; strongest law firm in the world
                          </h1>
                          <p className="w-lg-80 ms-auto">
                            We give best law administration to customers and
                            attempt to accomplish our customers trust.
                          </p>
                          <a
                            href="about.html"
                            className="butn butn-white butn-hover"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item" style={{ width: 701 }}>
                <div
                  className="text-start item bg-img secondary-overlay"
                  data-overlay-dark={8}
                  data-background="img/banner/banner-01.jpg"
                  style={{ backgroundImage: 'url("img/banner/banner-01.jpg")' }}
                >
                  <div className="container h-100">
                    <div className="d-table h-100 w-100">
                      <div className="d-table-cell align-middle caption">
                        <div className="overflow-hidden w-95 w-md-85 w-lg-75">
                          <span className="sub-title">Professional lawyers</span>
                          <h1 className="">Liberty and justice for everybody</h1>
                          <p className="w-lg-80">
                            We give best law administration to customers and
                            attempt to accomplish our customers trust.
                          </p>
                          <a
                            href="about.html"
                            className="butn butn-white butn-hover"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item" style={{ width: 701 }}>
                <div
                  className="text-center item bg-img secondary-overlay"
                  data-overlay-dark={8}
                  data-background="img/banner/banner-02.jpg"
                  style={{ backgroundImage: 'url("img/banner/banner-02.jpg")' }}
                >
                  <div className="container h-100">
                    <div className="d-table h-100 w-100">
                      <div className="d-table-cell align-middle caption">
                        <div className="w-md-75 mx-auto">
                          <span className="sub-title">Introduce lawsight</span>
                          <h1 className="">
                            We are here to secure any sort of violence
                          </h1>
                          <p className="w-lg-80 mx-auto">
                            We give best law administration to customers and
                            attempt to accomplish our customers trust.
                          </p>
                          <a
                            href="about.html"
                            className="butn butn-white butn-hover"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item active" style={{ width: 701 }}>
                <div
                  className="text-end item bg-img secondary-overlay"
                  data-overlay-dark={8}
                  data-background="img/banner/banner-03.jpg"
                  style={{ backgroundImage: 'url("img/banner/banner-03.jpg")' }}
                >
                  <div className="container h-100">
                    <div className="d-table h-100 w-100">
                      <div className="d-table-cell align-middle caption">
                        <div className="overflow-hidden w-95 w-md-85 w-lg-75">
                          <span className="sub-title animated fadeInUp">
                            Strong team of leaders
                          </span>
                          <h1 className="animated fadeInUp">
                            Finest &amp; strongest law firm in the world
                          </h1>
                          <p className="w-lg-80 ms-auto animated fadeInUp">
                            We give best law administration to customers and
                            attempt to accomplish our customers trust.
                          </p>
                          <a
                            href="about.html"
                            className="butn butn-white butn-hover animated fadeInUp"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={{ width: 701 }}>
                <div
                  className="text-start item bg-img secondary-overlay"
                  data-overlay-dark={8}
                  data-background="img/banner/banner-01.jpg"
                  style={{ backgroundImage: 'url("img/banner/banner-01.jpg")' }}
                >
                  <div className="container h-100">
                    <div className="d-table h-100 w-100">
                      <div className="d-table-cell align-middle caption">
                        <div className="overflow-hidden w-95 w-md-85 w-lg-75">
                          <span className="sub-title">Professional lawyers</span>
                          <h1 className="">Liberty and justice for everybody</h1>
                          <p className="w-lg-80">
                            We give best law administration to customers and
                            attempt to accomplish our customers trust.
                          </p>
                          <a
                            href="about.html"
                            className="butn butn-white butn-hover"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item animated owl-animated-out fadeOut cloned"
                style={{ width: 701, left: 690 }}
              >
                <div
                  className="text-center item bg-img secondary-overlay"
                  data-overlay-dark={8}
                  data-background="img/banner/banner-02.jpg"
                  style={{ backgroundImage: 'url("img/banner/banner-02.jpg")' }}
                >
                  <div className="container h-100">
                    <div className="d-table h-100 w-100">
                      <div className="d-table-cell align-middle caption">
                        <div className="w-md-75 mx-auto">
                          <span className="sub-title">Introduce lawsight</span>
                          <h1 className="">
                            We are here to secure any sort of violence
                          </h1>
                          <p className="w-lg-80 mx-auto">
                            We give best law administration to customers and
                            attempt to accomplish our customers trust.
                          </p>
                          <a
                            href="about.html"
                            className="butn butn-white butn-hover"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav disabled">
            <button type="button" role="presentation" className="owl-prev">
              <i className="ti-angle-left" />
            </button>
            <button type="button" role="presentation" className="owl-next">
              <i className="ti-angle-right" />
            </button>
          </div>
          <div className="owl-dots">
            <button role="button" className="owl-dot">
              <span />
            </button>
            <button role="button" className="owl-dot">
              <span />
            </button>
            <button role="button" className="owl-dot active">
              <span />
            </button>
          </div>
          <div className="owl-thumbs" />
        </div>
      </div>
      {/* ABOUTUS
    ================================================== */}
      <section className="about-style1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-2-5 mb-lg-0">
              <div className="position-relative">
                <div className="position-relative z-index-1 py-2-9 py-xl-7 px-1-6 px-md-2-9 px-lg-2-5 px-xl-2-9">
                  <img src="img/content/about-01.jpg" alt="..." />
                </div>
                <span className="position-absolute top-0 start-0 z-index-0">
                  <img src="img/content/bg-pattern.png" alt="..." />
                </span>
                <div className="about-counter">
                  <h4 className="countup">20</h4>
                  <span className="fs-5 font-weight-500">
                    Years Of Experience
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-2-5 ps-xl-6">
                <h2 className="h1 mb-1-6">We are the most popular law firm</h2>
                <p className="lead mb-1-6">
                  We offer our clients fresh perspectives and breakthrough
                  business insights.
                </p>
                <div className="border-start border-primary border-width-3 ps-4">
                  <p className="fst-italic">
                    Lawyer is worth much more than I paid. Lawyer did exactly what
                    you said it does. I could probably go into sales for you.
                  </p>
                  <h6 className="small text-capitalize m-0">- Marion Shepard</h6>
                </div>
                <div className="dotted-seprator" />
                <div className="row mb-1-9 mb-xl-2-5">
                  <div className="col-sm-6">
                    <ul className="list-style1 mb-2 mb-sm-0">
                      <li>Expert legal serives.</li>
                      <li>100% success rate.</li>
                      <li>No consultation.</li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="list-style1">
                      <li>Professional approach.</li>
                      <li>Expert attorneys.</li>
                      <li>Probably law firm.</li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img src="img/content/author-sign.png" alt="..." />
                  </div>
                  <div className="flex-grow-1 border-start border-width-2 border-color-extra-light-gray ps-3 ps-sm-4 ms-3 ms-sm-4">
                    <h5>Gloria Fleming</h5>
                    <p className="mb-0">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SERVICE
    ================================================== */}
      <section className="bg-light">
        <div className="container">
          <div className="section-heading">
            <span className="alt-font">Practice Areas</span>
            <h2>Innovation and client focused our practice area</h2>
          </div>
          <div className="row mt-n1-9">
            <div className="col-md-6 col-lg-4 mt-1-9">
              <div className="card card-style1">
                <div className="card-body">
                  <div className="icon">
                    <img src="img/icons/icon-01.png" alt="..." />
                  </div>
                  <h3 className="mb-3 h4">
                    <a href="business-law.html">Business Law</a>
                  </h3>
                  <p className="mb-3 w-95 mx-auto">
                    Our accomplished lawyer offer incredible preliminary planning.
                  </p>
                  <a href="business-law.html" className="font-weight-500">
                    Read more
                    <i className="fas fa-long-arrow-alt-right align-middle ms-2 display-30" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-1-9">
              <div className="card card-style1">
                <div className="card-body">
                  <div className="icon">
                    <img src="img/icons/icon-02.png" alt="..." />
                  </div>
                  <h3 className="mb-3 h4">
                    <a href="criminal-law.html">Criminal Law</a>
                  </h3>
                  <p className="mb-3 w-95 mx-auto">
                    Our accomplished lawyer offer incredible preliminary planning.
                  </p>
                  <a href="criminal-law.html" className="font-weight-500">
                    Read more
                    <i className="fas fa-long-arrow-alt-right align-middle ms-2 display-30" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-1-9">
              <div className="card card-style1">
                <div className="card-body">
                  <div className="icon">
                    <img src="img/icons/icon-03.png" alt="..." />
                  </div>
                  <h3 className="mb-3 h4">
                    <a href="divorce-law.html">Divorce Law</a>
                  </h3>
                  <p className="mb-3 w-95 mx-auto">
                    Our accomplished lawyer offer incredible preliminary planning.
                  </p>
                  <a href="divorce-law.html" className="font-weight-500">
                    Read more
                    <i className="fas fa-long-arrow-alt-right align-middle ms-2 display-30" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-1-9">
              <div className="card card-style1">
                <div className="card-body">
                  <div className="icon">
                    <img src="img/icons/icon-04.png" alt="..." />
                  </div>
                  <h3 className="mb-3 h4">
                    <a href="education-law.html">Education Law</a>
                  </h3>
                  <p className="mb-3 w-95 mx-auto">
                    Our accomplished lawyer offer incredible preliminary planning.
                  </p>
                  <a href="education-law.html" className="font-weight-500">
                    Read more
                    <i className="fas fa-long-arrow-alt-right align-middle ms-2 display-30" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-1-9">
              <div className="card card-style1">
                <div className="card-body">
                  <div className="icon">
                    <img src="img/icons/icon-05.png" alt="..." />
                  </div>
                  <h3 className="mb-3 h4">
                    <a href="family-law.html">Family Law</a>
                  </h3>
                  <p className="mb-3 w-95 mx-auto">
                    Our accomplished lawyer offer incredible preliminary planning.
                  </p>
                  <a href="family-law.html" className="font-weight-500">
                    Read more
                    <i className="fas fa-long-arrow-alt-right align-middle ms-2 display-30" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-1-9">
              <div className="card card-style1">
                <div className="card-body">
                  <div className="icon">
                    <img src="img/icons/icon-06.png" alt="..." />
                  </div>
                  <h3 className="mb-3 h4">
                    <a href="insurance-law.html">Insurance Law</a>
                  </h3>
                  <p className="mb-3 w-95 mx-auto">
                    Our accomplished lawyer offer incredible preliminary planning.
                  </p>
                  <a href="insurance-law.html" className="font-weight-500">
                    Read more
                    <i className="fas fa-long-arrow-alt-right align-middle ms-2 display-30" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* COUNTER
    ================================================== */}
      <section
        className="bg-img cover-background secondary-overlay"
        data-overlay-dark={8}
        data-background="img/bg/bg-07.jpg"
        style={{ backgroundImage: 'url("img/bg/bg-07.jpg")' }}
      >
        <div className="container">
          <div className="row mt-n1-9">
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="counter-style1">
                <div className="ps-sm-4">
                  <h3 className="text-white mb-2 h1">
                    <span className="countup">545</span>
                  </h3>
                  <p className="text-white font-weight-500 mb-0 fs-6">
                    Cases Done
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="counter-style1">
                <div className="ps-sm-4">
                  <h3 className="text-white mb-2 h1">
                    <span className="countup">700</span>
                  </h3>
                  <p className="text-white font-weight-500 mb-0 fs-6">
                    Happy Clients
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="counter-style1">
                <div className="ps-sm-4">
                  <h3 className="text-white mb-2 h1">
                    <span className="countup">230</span>
                  </h3>
                  <p className="text-white font-weight-500 mb-0 fs-6">
                    Awards Win
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="counter-style1">
                <div className="ps-sm-4">
                  <h3 className="text-white mb-2 h1">
                    <span className="countup">156</span>
                  </h3>
                  <p className="text-white font-weight-500 mb-0 fs-6">
                    Worldwide site firm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROCESS
    ================================================== */}
      <section>
        <div className="container">
          <div className="section-heading">
            <span className="alt-font">Working Process</span>
            <h2>Bold approaches expert counsel results that matter</h2>
          </div>
          <div className="row process-number-counter mt-n1-9">
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="process-style1">
                <div className="process-img">
                  <img
                    src="img/content/process-01.jpg"
                    className="rounded-circle"
                    alt="..."
                  />
                </div>
                <div className="process-number" />
                <h3 className="mb-3 h4">Listen Problems</h3>
                <p className="w-md-85 mx-auto mb-4">
                  The protection calling is one that accompanies great monetary
                  prize.
                </p>
                <div className="process-btn">
                  <a href="#!">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="process-style1">
                <div className="process-img">
                  <img
                    src="img/content/process-02.jpg"
                    className="rounded-circle"
                    alt="..."
                  />
                </div>
                <div className="process-number" />
                <h3 className="mb-3 h4">Some Research</h3>
                <p className="w-md-85 mx-auto mb-4">
                  The protection calling is one that accompanies great monetary
                  prize.
                </p>
                <div className="process-btn">
                  <a href="#!">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="process-style1">
                <div className="process-img">
                  <img
                    src="img/content/process-03.jpg"
                    className="rounded-circle"
                    alt="..."
                  />
                </div>
                <div className="process-number" />
                <h3 className="mb-3 h4">Make Shorting</h3>
                <p className="w-md-85 mx-auto mb-4">
                  The protection calling is one that accompanies great monetary
                  prize.
                </p>
                <div className="process-btn">
                  <a href="#!">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="process-style1 last-arrow">
                <div className="process-img">
                  <img
                    src="img/content/process-04.jpg"
                    className="rounded-circle"
                    alt="..."
                  />
                </div>
                <div className="process-number" />
                <h3 className="mb-3 h4">Do Final Work</h3>
                <p className="w-md-85 mx-auto mb-4">
                  The protection calling is one that accompanies great monetary
                  prize.
                </p>
                <div className="process-btn">
                  <a href="#!">
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TEAM
    ================================================== */}
      <section className="bg-light">
        <div className="container">
          <div className="section-heading">
            <span className="alt-font">Qualified Attorneys</span>
            <h2 className="w-90 mx-auto">
              Successful expert &amp; attorney works with our team
            </h2>
          </div>
          <div className="row mt-n1-9">
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="card card-style2 position-relative overflow-hidden rounded-0 border-0">
                <img src="img/team/team-01.jpg" alt="..." />
                <div className="card-body">
                  <div className="team-infos">
                    <span className="mb-2 display-30">Civil Lawyer</span>
                    <h4 className="h5 mb-3">
                      <a href="attorney-details.html" className="text-white">
                        Jorge Meyer
                      </a>
                    </h4>
                    <ul className="social-icons">
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="card card-style2 position-relative overflow-hidden rounded-0 border-0">
                <img src="img/team/team-02.jpg" alt="..." />
                <div className="card-body">
                  <div className="team-infos">
                    <span className="mb-2 display-30">Financial Lawyer</span>
                    <h4 className="h5 mb-3">
                      <a href="attorney-details.html" className="text-white">
                        Ellen Gibb
                      </a>
                    </h4>
                    <ul className="social-icons">
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="card card-style2 position-relative overflow-hidden rounded-0 border-0">
                <img src="img/team/team-03.jpg" alt="..." />
                <div className="card-body">
                  <div className="team-infos">
                    <span className="mb-2 display-30">Criminal Lawyer</span>
                    <h4 className="h5 mb-3">
                      <a href="attorney-details.html" className="text-white">
                        Raymond Binder
                      </a>
                    </h4>
                    <ul className="social-icons">
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mt-1-9">
              <div className="card card-style2 position-relative overflow-hidden rounded-0 border-0">
                <img src="img/team/team-04.jpg" alt="..." />
                <div className="card-body">
                  <div className="team-infos">
                    <span className="mb-2 display-30">Family Lawyer</span>
                    <h4 className="h5 mb-3">
                      <a href="attorney-details.html" className="text-white">
                        Ollie Griffin
                      </a>
                    </h4>
                    <ul className="social-icons">
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TESTIMONIAL
    ================================================== */}
      <section
        className="bg-img cover-background secondary-overlay"
        data-overlay-dark={9}
        data-background="img/bg/bg-01.jpg"
        style={{ backgroundImage: 'url("img/bg/bg-01.jpg")' }}
      >
        <div className="container">
          <div className="section-heading">
            <span className="alt-font">Testimonials</span>
            <h2 className="text-white">Our happy clients says about our work</h2>
          </div>
          <div
            className="testimonial-style1 owl-carousel owl-theme owl-loaded owl-drag"
            data-slider-id={1}
          >
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transition: "all",
                  width: 3612,
                  transform: "translate3d(-1032px, 0px, 0px)"
                }}
              >
                <div className="owl-item cloned" style={{ width: 516 }}>
                  <div>
                    <div className="testimonial-quote">
                      <i className="fa fa-quote-left" />
                    </div>
                    <p className="text-white w-90 w-lg-70 w-xl-65 mx-auto mb-2-2 lead">
                      Lawyer is awesome! I can't say enough about lawyer. The best
                      on the net! Lawyer impressed me on multiple levels. It's all
                      good.
                    </p>
                    <div className="display-31 text-warning mb-3">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h4 className="h5 text-white mb-1">Christine Schneider</h4>
                    <span className="display-31 text-white">Prosecutor</span>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: 516 }}>
                  <div>
                    <div className="testimonial-quote">
                      <i className="fa fa-quote-left" />
                    </div>
                    <p className="text-white w-90 w-lg-70 w-xl-65 mx-auto mb-2-2 lead">
                      If you want real marketing that works and effective
                      implementation - lawyer's got you covered. It's incredible.
                      Lawyer is the most valuable business resource we have EVER
                      purchased.
                    </p>
                    <div className="display-31 text-warning mb-3">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h4 className="h5 text-white mb-1">David Stigall</h4>
                    <span className="display-31 text-white">Trial Lawyer</span>
                  </div>
                </div>
                <div className="owl-item active center" style={{ width: 516 }}>
                  <div>
                    <div className="testimonial-quote">
                      <i className="fa fa-quote-left" />
                    </div>
                    <p className="text-white w-90 w-lg-70 w-xl-65 mx-auto mb-2-2 lead">
                      I would also like to say thank you to all your staff. Lawyer
                      was the best investment I ever made. We're loving it. I am
                      so pleased with this product.
                    </p>
                    <div className="display-31 text-warning mb-3">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h4 className="h5 text-white mb-1">Victor Lucien</h4>
                    <span className="display-31 text-white">
                      Assistant Counsel
                    </span>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 516 }}>
                  <div>
                    <div className="testimonial-quote">
                      <i className="fa fa-quote-left" />
                    </div>
                    <p className="text-white w-90 w-lg-70 w-xl-65 mx-auto mb-2-2 lead">
                      Lawyer is awesome! I can't say enough about lawyer. The best
                      on the net! Lawyer impressed me on multiple levels. It's all
                      good.
                    </p>
                    <div className="display-31 text-warning mb-3">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h4 className="h5 text-white mb-1">Christine Schneider</h4>
                    <span className="display-31 text-white">Prosecutor</span>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 516 }}>
                  <div>
                    <div className="testimonial-quote">
                      <i className="fa fa-quote-left" />
                    </div>
                    <p className="text-white w-90 w-lg-70 w-xl-65 mx-auto mb-2-2 lead">
                      If you want real marketing that works and effective
                      implementation - lawyer's got you covered. It's incredible.
                      Lawyer is the most valuable business resource we have EVER
                      purchased.
                    </p>
                    <div className="display-31 text-warning mb-3">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h4 className="h5 text-white mb-1">David Stigall</h4>
                    <span className="display-31 text-white">Trial Lawyer</span>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: 516 }}>
                  <div>
                    <div className="testimonial-quote">
                      <i className="fa fa-quote-left" />
                    </div>
                    <p className="text-white w-90 w-lg-70 w-xl-65 mx-auto mb-2-2 lead">
                      I would also like to say thank you to all your staff. Lawyer
                      was the best investment I ever made. We're loving it. I am
                      so pleased with this product.
                    </p>
                    <div className="display-31 text-warning mb-3">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h4 className="h5 text-white mb-1">Victor Lucien</h4>
                    <span className="display-31 text-white">
                      Assistant Counsel
                    </span>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: 516 }}>
                  <div>
                    <div className="testimonial-quote">
                      <i className="fa fa-quote-left" />
                    </div>
                    <p className="text-white w-90 w-lg-70 w-xl-65 mx-auto mb-2-2 lead">
                      Lawyer is awesome! I can't say enough about lawyer. The best
                      on the net! Lawyer impressed me on multiple levels. It's all
                      good.
                    </p>
                    <div className="display-31 text-warning mb-3">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <h4 className="h5 text-white mb-1">Christine Schneider</h4>
                    <span className="display-31 text-white">Prosecutor</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev">
                <span aria-label="Previous">‹</span>
              </button>
              <button type="button" role="presentation" className="owl-next">
                <span aria-label="Next">›</span>
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
          <div className="owl-thumbs text-center mt-1-9" data-slider-id={1}>
            <button className="owl-thumb-item bg-transparent active">
              <img
                src="img/avatar/avatar-01.jpg"
                className="testimonial-img"
                alt="..."
              />
            </button>
            <button className="owl-thumb-item bg-transparent">
              <img
                src="img/avatar/avatar-02.jpg"
                className="testimonial-img"
                alt="..."
              />
            </button>
            <button className="owl-thumb-item bg-transparent">
              <img
                src="img/avatar/avatar-03.jpg"
                className="testimonial-img"
                alt="..."
              />
            </button>
          </div>
        </div>
      </section>
      {/* PORTFOLIO
    ================================================== */}
      <section>
        <div className="container">
          <div className="section-heading">
            <span className="alt-font">Case Studies</span>
            <h2>Check case studie which is built with our experience</h2>
          </div>
          <div className="row portfolio-gallery mt-n1-9">
            <div
              className="col-md-6 col-lg-4 mt-1-9"
              data-src="img/case-study/case-study-01.jpg"
              data-sub-html="<h4 class='text-white'>Immigration Claims #01</h4>"
            >
              <div className="portfolio-style1">
                <img src="img/case-study/case-study-01.jpg" alt="..." />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <div className="portfolio-inner">
                      <h4 className="h5 mb-4">
                        <a
                          href="case-study-details.html"
                          className="portfolio-link text-white"
                        >
                          Immigration Claims
                        </a>
                      </h4>
                      <div className="porfolio-btn">
                        <a href="case-study-details.html">
                          <span className="ti-zoom-in fs-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mt-1-9"
              data-src="img/case-study/case-study-02.jpg"
              data-sub-html="<h4 class='text-white'>Child Protection #02</h4>"
            >
              <div className="portfolio-style1">
                <img src="img/case-study/case-study-02.jpg" alt="..." />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <div className="portfolio-inner">
                      <h4 className="h5 mb-4">
                        <a
                          href="case-study-details.html"
                          className="portfolio-link text-white"
                        >
                          Child Protection
                        </a>
                      </h4>
                      <div className="porfolio-btn">
                        <a href="case-study-details.html">
                          <span className="ti-zoom-in fs-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mt-1-9"
              data-src="img/case-study/case-study-03.jpg"
              data-sub-html="<h4 class='text-white'>Criminal Defence #03</h4>"
            >
              <div className="portfolio-style1">
                <img src="img/case-study/case-study-03.jpg" alt="..." />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <div className="portfolio-inner">
                      <h4 className="h5 mb-4">
                        <a
                          href="case-study-details.html"
                          className="portfolio-link text-white"
                        >
                          Criminal Defence
                        </a>
                      </h4>
                      <div className="porfolio-btn">
                        <a href="case-study-details.html">
                          <span className="ti-zoom-in fs-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mt-1-9"
              data-src="img/case-study/case-study-04.jpg"
              data-sub-html="<h4 class='text-white'>Civil Rights #04</h4>"
            >
              <div className="portfolio-style1">
                <img src="img/case-study/case-study-04.jpg" alt="..." />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <div className="portfolio-inner">
                      <h4 className="h5 mb-4">
                        <a
                          href="case-study-details.html"
                          className="portfolio-link text-white"
                        >
                          Civil Rights
                        </a>
                      </h4>
                      <div className="porfolio-btn">
                        <a href="case-study-details.html">
                          <span className="ti-zoom-in fs-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mt-1-9"
              data-src="img/case-study/case-study-05.jpg"
              data-sub-html="<h4 class='text-white'>Bank & Financial #05</h4>"
            >
              <div className="portfolio-style1">
                <img src="img/case-study/case-study-05.jpg" alt="..." />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <div className="portfolio-inner">
                      <h4 className="h5 mb-4">
                        <a
                          href="case-study-details.html"
                          className="portfolio-link text-white"
                        >
                          Bank &amp; Financial
                        </a>
                      </h4>
                      <div className="porfolio-btn">
                        <a href="case-study-details.html">
                          <span className="ti-zoom-in fs-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 mt-1-9"
              data-src="img/case-study/case-study-06.jpg"
              data-sub-html="<h4 class='text-white'>Family Violence #06</h4>"
            >
              <div className="portfolio-style1">
                <img src="img/case-study/case-study-06.jpg" alt="..." />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <div className="portfolio-inner">
                      <h4 className="h5 mb-4">
                        <a
                          href="case-study-details.html"
                          className="portfolio-link text-white"
                        >
                          Family Violence
                        </a>
                      </h4>
                      <div className="porfolio-btn">
                        <a href="case-study-details.html">
                          <span className="ti-zoom-in fs-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* EXTRA
    ================================================== */}
      <section
        className="bg-img cover-background secondary-overlay"
        data-overlay-dark={8}
        data-background="img/bg/bg-05.jpg"
        style={{ backgroundImage: 'url("img/bg/bg-05.jpg")' }}
      >
        <div className="container">
          <div className="row align-items-center mt-n7">
            <div className="col-lg-8 mt-7 text-center text-lg-start">
              <div className="border-bottom border-color-light-white pb-1-9 pb-md-2-5 mb-1-6 mb-md-2-5">
                <h2 className="h1 text-white mb-1-6">
                  Our goals and achievements on lawyers practice
                </h2>
                <p className="mb-0 w-95 text-white display-29 display-sm-28 opacity9 mx-auto mx-lg-0">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
              </div>
              <div className="client-carousel owl-carousel owl-theme owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-1806px, 0px, 0px)",
                      transition: "1.5s",
                      width: 3096
                    }}
                  >
                    <div className="owl-item cloned" style={{ width: 258 }}>
                      <div className="text-center">
                        <img src="img/partners/partner-04.png" alt="..." />
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 258 }}>
                      <div className="text-center">
                        <img src="img/partners/partner-05.png" alt="..." />
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 258 }}>
                      <div className="text-center">
                        <img src="img/partners/partner-06.png" alt="..." />
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 258 }}>
                      <div className="text-center">
                        <img src="img/partners/partner-01.png" alt="..." />
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 258 }}>
                      <div className="text-center">
                        <img src="img/partners/partner-02.png" alt="..." />
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 258 }}>
                      <div className="text-center">
                        <img src="img/partners/partner-03.png" alt="..." />
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 258 }}>
                      <div className="text-center">
                        <img src="img/partners/partner-04.png" alt="..." />
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: 258 }}>
                      <div className="text-center">
                        <img src="img/partners/partner-05.png" alt="..." />
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: 258 }}>
                      <div className="text-center">
                        <img src="img/partners/partner-06.png" alt="..." />
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 258 }}>
                      <div className="text-center">
                        <img src="img/partners/partner-01.png" alt="..." />
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 258 }}>
                      <div className="text-center">
                        <img src="img/partners/partner-02.png" alt="..." />
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 258 }}>
                      <div className="text-center">
                        <img src="img/partners/partner-03.png" alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <button type="button" role="presentation" className="owl-prev">
                    <span aria-label="Previous">‹</span>
                  </button>
                  <button type="button" role="presentation" className="owl-next">
                    <span aria-label="Next">›</span>
                  </button>
                </div>
                <div className="owl-dots disabled" />
                <div className="owl-thumbs" />
              </div>
            </div>
            <div className="col-lg-4 text-center mt-7">
              <div className="story-video">
                <a
                  className="video video_btn small bg-white"
                  href="https://www.youtube.com/watch?v=oj1gAYwm6AA"
                >
                  <i className="fas fa-play text-primary" />
                </a>
                <div className="d-inline-block align-middle ps-1-6 ps-lg-2-2 text-white text-start font-weight-600">
                  Watch<span className="text-uppercase d-block">intro video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BLOG
    ================================================== */}
      <section>
        <div className="container">
          <div className="section-heading">
            <span className="alt-font">Recent Article</span>
            <h2>Our Lawyer has been good friend of mine for long time</h2>
          </div>
          <div className="row mt-n1-9">
            <div className="col-md-6 col-lg-4 mt-1-9">
              <article className="card card-style3 position-relative border-0 rounded-0 bg-transparent h-100">
                <div className="card-img">
                  <img src="img/blog/blog-01.jpg" alt="..." />
                  <div className="tags">
                    <a href="#!">Lawyer</a>
                    <a href="#!">Fraud case</a>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-3">
                    <li className="d-inline-block me-3">
                      <a href="#!">
                        <i className="far fa-calendar-check me-1 text-primary" />{" "}
                        Apr. 25, 2023
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a href="#!">
                        <i className="far fa-comment-dots me-1 text-primary" /> 10
                        Comment
                      </a>
                    </li>
                  </ul>
                  <h3 className="mb-3 h4">
                    <a href="blog-details.html">
                      Seven secrets you will not want to know about lawyer.
                    </a>
                  </h3>
                  <p>
                    It is critical to recruit a safeguard legal advisor. The
                    general set of laws is planned and...
                  </p>
                  <a href="blog-details.html" className="font-weight-500">
                    Read more
                    <i className="fas fa-long-arrow-alt-right align-middle ms-2 display-30" />
                  </a>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-lg-4 mt-1-9">
              <article className="card card-style3 position-relative border-0 rounded-0 bg-transparent h-100">
                <div className="card-img">
                  <img src="img/blog/blog-02.jpg" alt="..." />
                  <div className="tags">
                    <a href="#!">Lawyer</a>
                    <a href="#!">Learning</a>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-3">
                    <li className="d-inline-block me-3">
                      <a href="#!">
                        <i className="far fa-calendar-check me-1 text-primary" />{" "}
                        Apr. 21, 2023
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a href="#!">
                        <i className="far fa-comment-dots me-1 text-primary" /> 20
                        Comment
                      </a>
                    </li>
                  </ul>
                  <h3 className="mb-3 h4">
                    <a href="blog-details.html">
                      5 advices that you listen before studying lawyer.
                    </a>
                  </h3>
                  <p>
                    It is critical to recruit a safeguard legal advisor. The
                    general set of laws is planned and...
                  </p>
                  <a href="blog-details.html" className="font-weight-500">
                    Read more
                    <i className="fas fa-long-arrow-alt-right align-middle ms-2 display-30" />
                  </a>
                </div>
              </article>
            </div>
            <div className="col-md-6 col-lg-4 mt-1-9">
              <article className="card card-style3 position-relative border-0 rounded-0 bg-transparent h-100">
                <div className="card-img">
                  <img src="img/blog/blog-03.jpg" alt="..." />
                  <div className="tags">
                    <a href="#!">Lawyer</a>
                    <a href="#!">Legal Advise</a>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-3">
                    <li className="d-inline-block me-3">
                      <a href="#!">
                        <i className="far fa-calendar-check me-1 text-primary" />{" "}
                        Apr. 18, 2023
                      </a>
                    </li>
                    <li className="d-inline-block">
                      <a href="#!">
                        <i className="far fa-comment-dots me-1 text-primary" /> 08
                        Comment
                      </a>
                    </li>
                  </ul>
                  <h3 className="mb-3 h4">
                    <a href="blog-details.html">
                      The millionaire guide on lawyer to help you get rich.
                    </a>
                  </h3>
                  <p>
                    It is critical to recruit a safeguard legal advisor. The
                    general set of laws is planned and...
                  </p>
                  <a href="blog-details.html" className="font-weight-500">
                    Read more
                    <i className="fas fa-long-arrow-alt-right align-middle ms-2 display-30" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER
    ================================================== */}
      <footer className="bg-secondary pt-0">
        <div className="container border-bottom border-color-light-white py-2-5 py-md-6 mb-6 mb-md-8 mb-lg-10">
          <div className="row justify-content-center mt-n1-9">
            <div className="col-sm-6 col-lg-4 mt-1-9">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <img src="img/icons/icon-07.png" alt="..." />
                </div>
                <div className="flex-grow-1 borders-start border-color-light-white ps-4 ms-3">
                  <h5 className="text-white">Request quote</h5>
                  <p className="text-white mb-0 display-31 opacity9">
                    Send us your request
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mt-1-9">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <img src="img/icons/icon-08.png" alt="..." />
                </div>
                <div className="flex-grow-1 borders-start border-color-light-white ps-4 ms-3">
                  <h5 className="text-white">Investigation</h5>
                  <p className="text-white mb-0 display-31 opacity9">
                    We will investigate about your case
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-1-9">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <img src="img/icons/icon-09.png" alt="..." />
                </div>
                <div className="flex-grow-1 borders-start border-color-light-white ps-4 ms-3">
                  <h5 className="text-white">Case fight</h5>
                  <p className="text-white mb-0 display-31 opacity9">
                    We will fight your case in court
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-n2-6">
            <div className="col-sm-6 col-xl-3 mt-2-6">
              <div className="mb-1-6 mb-lg-1-9">
                <a href="index.html" className="footer-logo">
                  <img src="img/logos/footer-light-logo.png" alt="..." />
                </a>
              </div>
              <p className="text-white mb-1-6 mb-lg-1-9 opacity9 display-30 display-lg-29">
                Lawyer is a group of highly experienced value-based and case
                lawyers from a portion of the country's greatest and most first
                class law offices.
              </p>
              <ul className="footer-social-style1">
                <li>
                  <a href="#!">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-xl-3 mt-2-6">
              <div className="ps-sm-1-6 ps-md-1-9">
                <h3 className="footer-title">Contact us</h3>
                <ul className="contact-list">
                  <li>
                    <span className="fas fa-map-marker-alt pe-3 text-white" />
                    66 Guild Street 512B, Great NT.
                  </li>
                  <li>
                    <span className="fa fa-phone-alt pe-3 text-white" />
                    <a href="#!">(+44) 123 456 7892</a>
                  </li>
                  <li>
                    <span className="fas fa-globe pe-3 text-white" />
                    <a href="#!">www.yoursite.com</a>
                  </li>
                  <li>
                    <span className="fa fa-envelope pe-3 text-white" />
                    <a href="#!">addyour@emailhere</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 mt-2-6">
              <div className="ps-xl-1-9">
                <h3 className="footer-title">Our services</h3>
                <ul className="footer-list-style1">
                  <li>
                    <a href="business-law.html">Business Law</a>
                  </li>
                  <li>
                    <a href="criminal-law.html">Criminal Law</a>
                  </li>
                  <li>
                    <a href="divorce-law.html">Divorce Law</a>
                  </li>
                  <li>
                    <a href="education-law.html">Education Law</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 mt-2-6">
              <div className="ps-sm-1-6 ps-md-1-9">
                <h3 className="footer-title">Trending post</h3>
                <div className="d-flex align-items-center mb-1-6">
                  <div className="flex-shrink-0">
                    <img src="img/instagram/insta-01.jpg" alt="..." />
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <h4 className="display-30 text-white">
                      <a href="blog-details.html" className="text-white">
                        Mediation Useful Family Law Cases?
                      </a>
                    </h4>
                    <span className="display-31 text-white">
                      <i className="far fa-calendar-check me-2 text-white" />
                      Apr 27, 2023
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <img src="img/instagram/insta-02.jpg" alt="..." />
                  </div>
                  <div className="flex-grow-1 ms-4">
                    <h4 className="display-30 text-white">
                      <a href="blog-details.html" className="text-white">
                        Allow to mile wound be place leave.
                      </a>
                    </h4>
                    <span className="display-31 text-white">
                      <i className="far fa-calendar-check me-2 text-white" />
                      Apr 24, 2023
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="d-inline-block text-white mb-0 display-30 display-lg-29">
                  © <span className="current-year">2025</span> Lawyer Powered
                  by&nbsp;
                  <a href="#!" className="text-primary white-hover">
                    Chitrakoot Web
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    {/* BUY TEMPLATE
      ================================================== */}
    <div className="buy-theme alt-font d-none d-lg-inline-block">
      <a
        href="https://wrapbootstrap.com/theme/lawyer-attorney-and-lawyers-html-template-WB0165D4R"
        target="_blank"
      >
        <i className="fas fa-cart-plus" />
        <span>Buy Template</span>
      </a>
    </div>
    <div className="all-demo alt-font d-none d-lg-inline-block">
      <a href="https://www.chitrakootweb.com/contact.html" target="_blank">
        <i className="far fa-envelope" />
        <span>Quick Question?</span>
      </a>
    </div>
    {/* start scroll to top */}
    <a href="#!" className="scroll-to-top" style={{ display: "none" }}>
      <i className="fas fa-angle-up" aria-hidden="true" />
    </a>
    {/* end scroll to top */}
    {/* jQuery */}
    {/* popper js */}
    {/* bootstrap */}
    {/* core.min.js */}
    {/* search */}
    {/* custom scripts */}
    {/* form plugins js */}
    {/* form scripts js */}
    {/* all js include end */}
  </>
  
  )
}



