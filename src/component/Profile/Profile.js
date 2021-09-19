import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import ProfileList from './ProfileList';
import Accordion from "react-bootstrap/Accordion";


class Profile extends Component {
  render() {
    // const { user,isAuthenticated } = this.props.auth0;
    return <>

          {this.props.addArray.map(item=>{
            console.log(item);
            return <ProfileList item={item}/>
          })}
        </>;
  }
}

export default withAuth0(Profile);