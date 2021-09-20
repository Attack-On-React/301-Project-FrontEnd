import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./BlogList.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class BlogsList extends Component {
  render() {
    return (
      <>
        <Carousel fade>
          <Carousel.Item>
            {this.props.techCrunchArray.map((item, i) => {
              if (i < 5) {
                return (
                  <div class="cards">
                    <Card style={{ width: "18rem" }}>
                    <div class={"imgDiv"}>
                      <Card.Img variant="top" src={item.urlToImage} />
                      </div>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <div class={"textDiv"}>
                        <Card.Text>
                          {item.title}
                        </Card.Text>
                        </div>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
            })}
          </Carousel.Item>
          <Carousel.Item>
            {this.props.techCrunchArray.map((item, i) => {
              if (i > 4 && i < 10) {
                return (
                  <div class="cards">
                    <Card style={{ width: "18rem" }}>
                    <div class={"imgDiv"}>
                      <Card.Img variant="top" src={item.urlToImage} />
                      </div>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <div class={"textDiv"}>
                        <Card.Text>
                          {item.title}
                        </Card.Text>
                        </div>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
            })}
          </Carousel.Item>
        </Carousel>
{/* ------------------------------------------------------------------------------------------------------ */}
        <Carousel fade>
          <Carousel.Item>
            {this.props.topbusinessArray.map((item, i) => {
              if (i < 5) {
                return (
                  <div class="cards">
                    <Card style={{ width: "18rem" }}>
                    <div class={"imgDiv"}>
                      <Card.Img variant="top" src={item.urlToImage} />
                      </div>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <div class={"textDiv"}>
                        <Card.Text>
                          {item.title}
                        </Card.Text>
                        </div>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
            })}
          </Carousel.Item>
          <Carousel.Item>
            {this.props.topbusinessArray.map((item, i) => {
              if (i > 4 && i < 10) {
                return (
                  <div class="cards">
                    <Card style={{ width: "18rem" }}>
                    <div class={"imgDiv"}>
                      <Card.Img variant="top" src={item.urlToImage} />
                      </div>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <div class={"textDiv"}>
                        <Card.Text>
                          {item.title}
                        </Card.Text>
                        </div>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
            })}
          </Carousel.Item>
        </Carousel>
        {/* ------------------------------------------------------------------------------------------------------ */}
        <Carousel fade>
          <Carousel.Item>
            {this.props.teslaArticlesArray.map((item, i) => {
              if (i < 5) {
                return (
                  <div class="cards">
                    <Card style={{ width: "18rem" }}>
                    <div class={"imgDiv"}>
                      <Card.Img variant="top" src={item.urlToImage} />
                      </div>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <div class={"textDiv"}>
                        <Card.Text>
                          {item.title}
                        </Card.Text>
                        </div>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
            })}
          </Carousel.Item>
          <Carousel.Item>
            {this.props.teslaArticlesArray.map((item, i) => {
              if (i > 4 && i < 10) {
                return (
                  <div class="cards">
                    <Card style={{ width: "18rem" }}>
                    <div class={"imgDiv"}>
                      <Card.Img variant="top" src={item.urlToImage} />
                      </div>
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <div class={"textDiv"}>
                        <Card.Text>
                          {item.title}
                        </Card.Text>
                        </div>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
            })}
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
export default BlogsList;
