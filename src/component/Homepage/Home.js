import { height } from "dom-helpers";
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Home.css";
import { MdPayment } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { SiCoursera } from "react-icons/si";
import { GiPlatform } from "react-icons/gi";
import { GiOpenBook } from "react-icons/gi";

class Home extends Component {
  render() {
    return (
      <>
        <main class="main-home">
          <section class="first-sec section">
              <div class="shape1"></div>
              <div class="shape2"></div>
              <div class="shape3"></div>

            <div id="first-P">
              <h1 calss="outter">Welcome To </h1>
              <p>
                {" "}
                <p className="welcomingtext">We believe in a world where the Internet means opportunity, we care about your future.<span><br/></span> learn new skills online with top educators.</p>
                <h5 className="weclomingqoute">"Education is not preparation for life, education is life itself"{" "}</h5>
              </p>
            </div>
            <div id="img-div">
              {/* <img src="https://www.kindpng.com/picc/m/748-7485082_online-course-wordpress-theme-hd-png-download.png" /> */}
              <img src="https://buzztechnics.com/wp-content/uploads/2020/04/buzztechs-elearning.png" />
            </div>
          </section>
          <hr />
          <section class="second-sec section">
          <div class="shape1"></div>
              <div class="shape2"></div>
              <div class="shape3"></div>
            <div id="img-div">
              <img src="https://www.reliablesoft.net/wp-content/uploads/2019/08/digital-marketing-courses.png" />
            </div>
            <div id="second-P">
              <h1 className="outtertitle">investing in knowledge and your future </h1>
              <p>
                {" "}
                <p className="welcomingtext">with help of Study Station, create your own path and drive on your skills on your own to achieve what you seek</p>{" "}
              </p>
            </div>
          </section>
          <hr />
          {/* <section id="Cards">
            <div className="card-container">
                <div className="card-header">

                </div>
                <div className="card-content"> </div>
                <div className="card-button"></div>
            </div>
            <div >
              <Card style={{ width: "18rem" }} className="subs-card">
                
                <Card.Body>
                  <Card.Title> 50$/Month </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div>
              <Card style={{ width: "18rem" }} className="subs-card">
                
                <Card.Body>
                  <Card.Title>100$/Month</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </section> */}
          {/* <section class="price text-center" id="price">
            <div class="headTitle">
              <h2>OUR PRICE</h2>
              <svg width="180px" height="20px">
                <line
                  x1="0"
                  y1="10"
                  x2="180"
                  y2="10"
                  stroke="#9e9e9e"
                  stroke-width="1px"
                ></line>
                <line
                  x1="50"
                  y1="10"
                  x2="130"
                  y2="10"
                  stroke="#2196f3"
                  stroke-width="5px"
                ></line>
              </svg>
            </div>

            <div class="container">
              <div class="row">
                <div
                  class="col-lg-4 col-md-6 col-sm-12 wow bounceInDown"
                  data-wow-duration="5s"
                  data-wow-offset="500"
                  data-wow-iteration="2"
                >
                  <div class="price-table">
                    <div class="price-head">
                      <h4>ASSOCIATED</h4>
                      <h2>
                        <span>$25</span> &#47; month
                      </h2>
                    </div>
                    <div class="price-content">
                      <ul>
                        <li> 2 Course </li>
                        <li> 7 days free trail for each course </li>
                        <li> Accessability to 20 learning resourses </li>
                        <li>24/7 Live Support</li>
                      </ul>
                    </div>
                    <div class="price-btn">
                      <button class="btn btn-primary">Register Now</button>
                    </div>
                  </div>
                </div>

                <div
                  class="col-lg-4 col-md-6 col-sm-12 wow bounceInRight"
                  data-wow-duration="5s"
                  data-wow-offset="500"
                  data-wow-iteration="2"
                >
                  <div class="price-table">
                    <div class="price-head">
                      <h4>PROFESSIONAL</h4>
                      <h2>
                        <span>$50</span> &#47; month
                      </h2>
                    </div>
                    <div class="price-content">
                      <ul>
                        <li> 5 Course </li>
                        <li> 7 days free trail for each course </li>
                        <li> Accessability to 50 learning resourses </li>
                        <li>24/7 Live Support</li>
                      </ul>
                    </div>
                    <div class="price-btn">
                      <button class="btn btn-primary">Register Now</button>
                    </div>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-6 col-sm-12 wow bounceInUp"
                  data-wow-duration="5s"
                  data-wow-offset="500"
                  data-wow-iteration="infinite"
                >
                  <div class="price-table">
                    <div class="price-head">
                      <h4>EXPERTS</h4>
                      <h2>
                        <span>$150</span> &#47; month
                      </h2>
                    </div>
                    <div class="price-content">
                      <ul>
                        <li> 7 Course </li>
                        <li> 12 days free trail for each course </li>
                        <li> Availability to Download Courses </li>
                        <li> Accessability to +100 learning resourses </li>
                        <li> 24/7 Live Support</li>
                      </ul>
                    </div>
                    <div class="price-btn">
                      <button class="btn btn-primary">Register Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section class="services text-center section" id="services">
            <div class="headTitle">
              <h2>OUR SERVICES</h2>
              <svg width="180px" height="20px">
                <line
                  x1="0"
                  y1="10"
                  x2="180"
                  y2="10"
                  stroke="#9e9e9e"
                  stroke-width="1px"
                ></line>
                <line
                  x1="50"
                  y1="10"
                  x2="130"
                  y2="10"
                  stroke="#2196f3"
                  stroke-width="5px"
                ></line>
              </svg>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12  ">
                  <div class="content">
                    <i class="fa fa-book">
                      <MdPayment class="svgHome" />
                    </i>
                    <h3>Payment Methods</h3>
                    <p>
                      Those who have a mind and a computer are able to topple an
                      empire on their own, so do not hesitate to learn
                      everything related to the world of information technology.
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="content">
                    <i class="fa fa-adjust ">
                      <SiCoursera class="svgHome" />
                    </i>
                    <h3>Wide Open Sources</h3>
                    <p>
                      Those who have a mind and a computer are able to topple an
                      empire on their own, so do not hesitate to learn
                      everything related to the world of information technology.
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 ">
                  <div class="content">
                    <i class="fa fa-american-sign-language-interpreting ">
                      <GiPlatform class="svgHome"/>
                    </i>
                    <h3>Different Platforms</h3>
                    <p>
                      Those who have a mind and a computer are able to topple an
                      empire on their own, so do not hesitate to learn
                      everything related to the world of information technology.
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 ">
                  <div class="content">
                    <i class="fa fa-clone">
                      <GiOpenBook class="svgHome"/>
                    </i>
                    <h3>Learning Materials</h3>
                    <p>
                      Those who have a mind and a computer are able to topple an
                      empire on their own, so do not hesitate to learn
                      everything related to the world of information technology.
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="content">
                    <i class="fa fa-gitlab">
                      <FaBlog class="svgHome"/>
                    </i>
                    <h3>Blogs,News, and Articles</h3>
                    <p>
                      Those who have a mind and a computer are able to topple an
                      empire on their own, so do not hesitate to learn
                      everything related to the world of information technology.
                    </p>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="content">
                    <i class="fa fa-google-wallet">
                      <BiSupport class="svgHome"/>
                    </i>
                    <h3>Support</h3>
                    <p>
                      Those who have a mind and a computer are able to topple an
                      empire on their own, so do not hesitate to learn
                      everything related to the world of information technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section class="corses-blogs-sect">
                <div class="wide-card courses-card">
            <a href="/CoursesToAdd">
              <Card
                className="bg-dark text-white homeCard"
                style={{ width: "95%" }}
              >
                <Card.Img
                  src="https://i.ibb.co/jr1jCtF/Blue-Courses-Button-on-Computer-Keyboard-Background-for-Your-Blog-or-Publication.jpg"
                  alt="Card image"
                  className="overlay-img"
                />
                <Card.ImgOverlay>
                  <Card.Title class="home-cardTitle">
                    <h1>Our Courses</h1>
                  </Card.Title>
                  <Card.Text class="home-cardText" >
                    We are offering a very wide range of courses that you may be
                    interested in! Visit Our Page
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </a>
            </div>
            <div class="wide-card blogs-card ">
              <a href="/blogs"><Card
                className="bg-dark text-white homeCard"
                style={{ width: "95%" }}
              >
                <Card.Img
                  src="https://i.ibb.co/L5vCX2H/blogs.jpg"
                  alt="Card image"
                  className="overlay-img"
                />
                <Card.ImgOverlay>
                  <Card.Title class="home-cardTitle">
                    <h1>Blogs</h1>
                  </Card.Title>
                  <Card.Text class="home-cardText">
                    You can Improve your knowledge by visiting our BLOGS page.
                    It contains a lot of interesting articles to read! Check
                    Them Out
                  </Card.Text>
                </Card.ImgOverlay>
              </Card></a>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default Home;
