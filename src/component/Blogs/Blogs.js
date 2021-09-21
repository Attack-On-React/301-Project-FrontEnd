import axios from "axios";
import React, { Component } from "react";
import BlogsList from "./BlogsList";
// import Carousel from "react-bootstrap/Carousel";
import "./BlogList.css";


class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      techCrunchArray: [],
      topbusinessArray: [],
      teslaArticlesArray: [],
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3010/TechCrunch")
      .then((result) => {
        this.setState({
          techCrunchArray: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:3010/Topbusiness")
      .then((result) => {
        this.setState({
          topbusinessArray: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:3010/TeslaArticles")
      .then((result) => {
        this.setState({
          teslaArticlesArray: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
      <img class="blogsmainimg" src="https://c4.wallpaperflare.com/wallpaper/589/559/827/blue-blur-gradation-pattern-wallpaper-preview.jpg"/>
      <h1 class="blogstitle">Blogs</h1>
      <div class="blogsDiv">
       <BlogsList 
       techCrunchArray={this.state.techCrunchArray}
       topbusinessArray={this.state.topbusinessArray}
       teslaArticlesArray={this.state.teslaArticlesArray}
       />
        </div>

        {/* <Carousel fade>
          {this.state.techCrunchArray.map((item) => {
            return <BlogsList item={item} />;
          })}
        </Carousel> */}
        

        {/* <Carousel>
        {this.state.topbusinessArray.map((item, i) => {
          if (i < 10) {
            return <BlogsList item={item} />;
          }
        })}
        </Carousel>
        <Carousel>
        {this.state.teslaArticlesArray.map((item, i) => {
          if (i < 10) {
            return <BlogsList item={item} />;
          }
        })}
        </Carousel> */}
      </>
    );
  }
}

export default Blogs;
