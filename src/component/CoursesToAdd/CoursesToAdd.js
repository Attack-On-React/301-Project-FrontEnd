import React, { Component } from 'react';
import axios from 'axios'
import CoursesToAddList from './CoursesToAddList'
import Row from 'react-bootstrap/Row';
import ModalCoursesToAddlist from './ModalCoursesToAddlist'
import { withAuth0 } from '@auth0/auth0-react';
import "./Css/CoursesToAdd.css"

class CoursesToAdd extends Component {


    constructor(props){
        super(props);
        this.state = {
            addArray:[],
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
    
    addCourse=(item)=>{
        const { user } = this.props.auth0;
        const email= user.email;
        console.log('before obj');
       const obj={
        courseName:item.courseName,
        urlimg:item.urlimg,
        unv:item.unv,
        unvimg:item.unvimg,
        description:item.description,
        price:item.price,
        email:email
        }
        console.log(obj);
        
        axios
        .post("http://localhost:3010/addcourse",obj)
        .then(result=>{
            this.setState({
             addArray:result.data,

            })
            console.log(this.state.addArray);
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
                    return <CoursesToAddList item={item} showModal={this.showModal} addCourse={this.addCourse} />
                })}
                </Row>
                <ModalCoursesToAddlist  showflag={this.state.showflag} handleClose={this.handleClose}
                courseName={this.state.courseName}
                urlimg={this.state.urlimg}
                unv={this.state.unv}
                unvimg={this.state.unvimg}
                description={this.state.description}
                price={this.state.price}
                addCourse={this.addCourse}
                />
            </>
        );
    }
}

export default withAuth0(CoursesToAdd);