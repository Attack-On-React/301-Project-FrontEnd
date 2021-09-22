import React, { Component } from 'react';
import axios from 'axios'
import CoursesToAddList from './CoursesToAddList'
import Row from 'react-bootstrap/Row';
import ModalCoursesToAddlist from './ModalCoursesToAddlist'
import { withAuth0 } from '@auth0/auth0-react';
import "./Css/CoursesToAdd.css"
import ConfirmModal from './ConfirmModal';


class CoursesToAdd extends Component {


    constructor(props){
        super(props);
        this.state = {
            addArray:[],
            courseArray:[],
            showflag:false,
            showModalFlag:false,
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
        .get("https://study-station.herokuapp.com/coursesData")
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
        .post("https://study-station.herokuapp.com/addcourse",obj)
        .then(result=>{
            this.setState({
             addArray:result.data,
             showModalFlag:true

            })
            console.log(this.state.addArray);
    })
    .catch(err=>{
    console.log(err);
    })
    }

    handleModalClose=()=>{
        this.setState({
            showModalFlag:false
        })
    }

    
    //--------------------------------------------
    render() {
        return (
            <>
            {/* <img class="coursesbackgroundimg" alt="background" src="https://www.wallpaperup.com/uploads/wallpapers/2015/01/18/590207/e0b7a05aa7f598ff0d960df2a0f44003-1000.jpg"/> */}
            {/* <h1>These our courses</h1> */}
            <div class="courseCards">
            <Row xs={1} md={4} className="g-4">
                {this.state.courseArray.map(item=>{
                    return <CoursesToAddList item={item} showModal={this.showModal} addCourse={this.addCourse} />
                })}
                </Row>
                </div>
                <ModalCoursesToAddlist  showflag={this.state.showflag} handleClose={this.handleClose}
                courseName={this.state.courseName}
                urlimg={this.state.urlimg}
                unv={this.state.unv}
                unvimg={this.state.unvimg}
                description={this.state.description}
                price={this.state.price}
                addCourse={this.addCourse}
                />
                <ConfirmModal 
                 show={this.state.showModalFlag}
                 handleModalClose={this.handleModalClose}
                  />
            </>
        );
    }
}

export default withAuth0(CoursesToAdd);