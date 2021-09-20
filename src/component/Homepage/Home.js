import { height } from 'dom-helpers';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <>
                <h1>Homepage</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Pf03RTjeISE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br/><br/>
                
                <section>
                    <Card style={{ width: '24rem' ,height:'24rem'}}>
                        <Card.Img variant="top" src="https://www.jtinetwork.com/wp-content/uploads/2020/07/courseintroimage.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card><br/><br/>
                </section>
                <section class='card2'>
                    <Card style={{ width: '24rem' ,height:'24rem'}}>
                        <Card.Img variant="top" src="https://www.jtinetwork.com/wp-content/uploads/2020/07/courseintroimage.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card><br/><br/>
                </section>
            </>
        );
    }
}

export default Home;