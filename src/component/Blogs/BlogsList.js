import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./BlogList.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// this.title=item.title
// this.author=item.author
// this.description=item.description
// this.url=item.url
// this.urlToImage=item.urlToImage


class BlogsList extends Component {
  render() {
    return (
      <>
        <Carousel fade>
          <Carousel.Item>
            {this.props.techCrunchArray.map((item, i) => {
              if (i < 4) {
                return (
                  <div class="cards">
                    <Card style={{ width: "18rem" }}>
                      <div class={"imgDiv"}>
                        <Card.Img
                          variant="top"
                          src={item.urlToImage}
                          style={{ width: "18rem" }}
                          style={{ height: "10rem" }}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title style={{ height: "10rem" }}>{item.title}</Card.Title>
                        <div class={"textDiv"}>
                          <Card.Text style={{ height: "3rem" }}>Author: {item.author}</Card.Text>
                        </div>
                        <a href={item.url} target="_blank" ><Button variant="primary">Read More</Button></a>
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
            })}
          </Carousel.Item>
          <Carousel.Item>
            {this.props.techCrunchArray.map((item, i) => {
              if (i > 3 && i < 8) {
                return (
                  <div class="cards">
                    <Card style={{ width: "18rem" }}>
                      <div class={"imgDiv"}>
                        <Card.Img
                          variant="top"
                          src={item.urlToImage}
                          style={{ width: "18rem" }}
                          style={{ height: "10rem" }}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title style={{ height: "10rem" }}>{item.title}</Card.Title>
                        <div class={"textDiv"}>
                          <Card.Text style={{ height: "3rem" }}>Author: {item.author}</Card.Text>
                        </div>
                        <a href={item.url} target="_blank" ><Button variant="primary">Read More</Button></a>
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
              if (i < 4) {
                return (
                  <div class="cards">
                    <Card style={{ width: "18rem" }}>
                      <div class={"imgDiv"}>
                        <Card.Img
                          variant="top"
                          src={item.urlToImage}
                          style={{ width: "18rem" }}
                          style={{ height: "10rem" }}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title style={{ height: "10rem" }}>{item.title}</Card.Title>
                        <div class={"textDiv"}>
                          <Card.Text style={{ height: "3rem" }}>Author: {item.author}</Card.Text>
                        </div>
                        <a href={item.url} target="_blank" ><Button variant="primary">Read More</Button></a>
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
            })}
          </Carousel.Item>
          <Carousel.Item>
            {this.props.topbusinessArray.map((item, i) => {
              if (i > 3 && i < 8) {
                return (
                  <div class="cards">
                  <Card style={{ width: "18rem" }}>
                    <div class={"imgDiv"}>
                      <Card.Img
                        variant="top"
                        src={item.urlToImage}
                        style={{ width: "18rem" }}
                        style={{ height: "10rem" }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title style={{ height: "10rem" }}>{item.title}</Card.Title>
                      <div class={"textDiv"}>
                        <Card.Text style={{ height: "3rem" }}>Author: {item.author}</Card.Text>
                      </div>
                      <a href={item.url} target="_blank" ><Button variant="primary">Read More</Button></a>
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
              if (i < 4) {
                return (
                  <div class="cards">
                    <Card style={{ width: "18rem" }}>
                      <div class={"imgDiv"}>
                        <Card.Img
                          variant="top"
                          src={item.urlToImage}
                          style={{ width: "18rem" }}
                          style={{ height: "10rem" }}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title style={{ height: "10rem" }}>{item.title}</Card.Title>
                        <div class={"textDiv"}>
                          <Card.Text style={{ height: "3rem" }}>Author: {item.author}</Card.Text>
                        </div>
                        <a href={item.url} target="_blank" ><Button variant="primary">Read More</Button></a>
                      </Card.Body>
                    </Card>
                  </div>
                );
              }
            })}
          </Carousel.Item>
          <Carousel.Item>
            {this.props.teslaArticlesArray.map((item, i) => {
              if (i > 3 && i < 8) {
                return (
                  <div class="cards">
                  <Card style={{ width: "18rem" }}>
                    <div class={"imgDiv"}>
                      <Card.Img
                        variant="top"
                        src={item.urlToImage}
                        style={{ width: "18rem" }}
                        style={{ height: "10rem" }}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title style={{ height: "10rem" }}>{item.title}</Card.Title>
                      <div class={"textDiv"}>
                        <Card.Text style={{ height: "3rem" }}>Author: {item.author}</Card.Text>
                      </div>
                      <a href={item.url} target="_blank" ><Button variant="primary">Read More</Button></a>
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
