import React, { Component } from 'react';
import axios from 'axios'
import CoursesToAddList from './CoursesToAddList'
import Row from 'react-bootstrap/Row';
import ModalCoursesToAddlist from './ModalCoursesToAddlist'

class CoursesToAdd extends Component {


    constructor(props){
        super(props);
        this.state = {
            courseArray:[],
            showflag:false,
            courseName:"",
            urlimg:"",
            unv:"",
            unvimg:"",
            description:"",
            price:"",
        }
      }

      //Methods

      // Method to show the model from the cards in CoursesToAdd page
      showModal=(item)=>{
          this.setState({
            showflag:true,
            courseName:item.courseName,
            urlimg:item.urlimg,
            unv:item.unv,
            unvimg:item.unvimg,
            description:item.description,
            price:item.price,
          })
      }
      // Method to close the model
      handleClose=()=>{
        this.setState({
            showflag:false
          })
      }
      // Method to self invoke to render the data from the server side
      componentDidMount=()=>{
        axios
        .get("http://localhost:3010/coursesData")
        .then(result=>{
            this.setState({
                courseArray:result.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }

    //--------------------------------------------
    render() {
        return (
            <>
            <h1>These our courses</h1>
            <Row xs={1} md={3} className="g-4">
                {this.state.courseArray.map(item=>{
                    return <CoursesToAddList item={item} showModal={this.showModal} />
                })}
                </Row>
                <ModalCoursesToAddlist  showflag={this.state.showflag} handleClose={this.handleClose}
                courseName={this.state.courseName}
                urlimg={this.state.urlimg}
                unv={this.state.unv}
                unvimg={this.state.unvimg}
                description={this.state.description}
                price={this.state.price}
                />
            </>
        );
    }
}

export default CoursesToAdd;