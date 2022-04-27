import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./BlogList.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FcReading } from "react-icons/fc";
import Swiper from 'swiper';
import { del } from "express/lib/application";

// this.title=item.title
// this.author=item.author
// this.description=item.description
// this.url=item.url
// this.urlToImage=item.urlToImage


class BlogsList extends Component {

  componentDidMount(){
    if(window.screen.width>1400){
      const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 50,
        slidesPerView: 4,
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          },
        pauseOnMouseEnter:false
  
      });
    }
    else if(window.screen.width>1000){ 
      const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 50,
        slidesPerView: 3,
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          },
        pauseOnMouseEnter:false
  
      });
    }
    else if(window.screen.width>760){
      const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 50,
        slidesPerView: 2,
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          },
        pauseOnMouseEnter:false
  
      });
    }
    else if(window.screen.width<760){
      const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 50,
        slidesPerView: 1,
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          },
        pauseOnMouseEnter:false
  
      });
    }
  }

  render() {
    return (
      <>
        <h3 className="carouseltitles">- TechCrunch blogs -</h3>
        <div class="swiper">
          <div class="swiper-wrapper">
            {this.props.techCrunchArray.map((item, i) => {
              if (i < 4) {
                return (
                  <div class="swiper-slide" data-swiper-autoplay="2000">
                    <div class="cards">
                      <Card className="blogscards" style={{ width: "18rem" }}>
                        <div class={"imgDiv"}>
                          <Card.Img
                            variant="top"
                            src={item.urlToImage}
                            style={{ width: "18rem", height: "10rem" }}
                          />
                        </div>
                        <Card.Body>
                          <Card.Title style={{ height: "10rem" }}>
                            {item.title}
                          </Card.Title>
                          <div class={"textDiv"}></div>
                          <a href={item.url} target="_blank">
                            <Button className="readmebtn" variant="primary">
                              {" "}
                              <FcReading className="svgreadmebtn" />
                              Read More
                            </Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                );
              }
            })}
            {this.props.techCrunchArray.map((item, i) => {
              if (i > 3 && i < 8) {
                return (
                  <div class="swiper-slide" data-swiper-autoplay="2000">
                    <div class="cards">
                      <Card className="blogscards" style={{ width: "18rem" }}>
                        <div class={"imgDiv"}>
                          <Card.Img
                            variant="top"
                            src={item.urlToImage}
                            style={{ width: "18rem", height: "10rem" }}
                          />
                        </div>
                        <Card.Body>
                          <Card.Title style={{ height: "10rem" }}>
                            {item.title}
                          </Card.Title>
                          <div class={"textDiv"}></div>
                          <a href={item.url} target="_blank">
                            <Button className="readmebtn" variant="primary">
                              {" "}
                              <FcReading className="svgreadmebtn" />
                              Read More
                            </Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------------------ */}
        <h3 className="carouseltitles">- Top Business blogs -</h3>
        <div class="swiper">
          <div class="swiper-wrapper">
            {this.props.topbusinessArray.map((item, i) => {
              if (i < 4) {
                return (
                  <div class="swiper-slide" data-swiper-autoplay="2000">
                    <div class="cards">
                      <Card
                        className="blogscards"
                        class="blogcards"
                        style={{ width: "18rem" }}
                      >
                        <div class={"imgDiv"}>
                          <Card.Img
                            variant="top"
                            src={item.urlToImage}
                            style={{ width: "18rem", height: "10rem" }}
                          />
                        </div>
                        <Card.Body>
                          <Card.Title style={{ height: "10rem" }}>
                            {item.title}
                          </Card.Title>
                          <div class={"textDiv"}></div>
                          <a href={item.url} target="_blank">
                            <Button className="readmebtn" variant="primary">
                              {" "}
                              <FcReading className="svgreadmebtn" />
                              Read More
                            </Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                );
              }
            })}
            {this.props.topbusinessArray.map((item, i) => {
              if (i > 3 && i < 8) {
                return (
                  <div class="swiper-slide" data-swiper-autoplay="2000">
                    <div class="cards">
                      <Card className="blogscards" style={{ width: "18rem" }}>
                        <div class={"imgDiv"}>
                          <Card.Img
                            variant="top"
                            src={item.urlToImage}
                            style={{ width: "18rem", height: "10rem" }}
                          />
                        </div>
                        <Card.Body>
                          <Card.Title style={{ height: "10rem" }}>
                            {item.title}
                          </Card.Title>
                          <div class={"textDiv"}></div>
                          <a href={item.url} target="_blank">
                            <Button className="readmebtn" variant="primary">
                              {" "}
                              <FcReading className="svgreadmebtn" />
                              Read More
                            </Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------ */}
        <h3 className="carouseltitles">- Apple blogs -</h3>
        <div class="swiper">
          <div class="swiper-wrapper">
            {this.props.teslaArticlesArray.map((item, i) => {
              if (i < 4) {
                return (
                  <div class="swiper-slide" data-swiper-autoplay="2000">
                    <div class="cards">
                      <Card className="blogscards" style={{ width: "18rem" }}>
                        <div class={"imgDiv"}>
                          <Card.Img
                            variant="top"
                            src={item.urlToImage}
                            style={{ width: "18rem", height: "10rem" }}
                          />
                        </div>
                        <Card.Body>
                          <Card.Title style={{ height: "10rem" }}>
                            {item.title}
                          </Card.Title>
                          <div class={"textDiv"}></div>
                          <a href={item.url} target="_blank">
                            <Button className="readmebtn" variant="primary">
                              {" "}
                              <FcReading className="svgreadmebtn" />
                              Read More
                            </Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                );
              }
            })}
            {this.props.teslaArticlesArray.map((item, i) => {
              if (i > 3 && i < 8) {
                return (
                  <div class="swiper-slide" data-swiper-autoplay="2000">
                    <div class="cards">
                      <Card className="blogscards" style={{ width: "18rem" }}>
                        <div class={"imgDiv"}>
                          <Card.Img
                            variant="top"
                            src={item.urlToImage}
                            style={{ width: "18rem", height: "10rem" }}
                          />
                        </div>
                        <Card.Body>
                          <Card.Title style={{ height: "10rem" }}>
                            {item.title}
                          </Card.Title>
                          <div class={"textDiv"}></div>
                          <a href={item.url} target="_blank">
                            <Button className="readmebtn" variant="primary">
                              {" "}
                              <FcReading className="svgreadmebtn" />
                              Read More
                            </Button>
                          </a>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </>
    );
  }
}
export default BlogsList;
