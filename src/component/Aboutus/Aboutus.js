import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './img/Rihan.jpg';
import Rami from './img/Rami.png';
import Qais from './img/Qais.jpg';
import Bashar from './img/Bashar.png';
import Aseel from './img/Aseel.jpg';
import Nedal from './img/Nedal.jpg';
import imgGitHub from './img/003-github.png'
import imgLinkIn from './img/001-linkedin.png'
import './AboutUs.css'

import Container from 'react-bootstrap/Container'


export class aboutUs extends Component {
  render() {
    return (
      <main class="mainAboutUs">
        <div class='con'>
          {/* <img class='hero' src="https://static-cse.canva.com/blob/141399/unique-inspiring-about-page.317625a3.jpg" alt='' /> */}
          <Container>
            <h1 class='h1'>
              The Experience Of Working Together As A Team
            </h1>
            <p class='p1'>
              During this 301 project,, We all worked together to plan and manage the implementation schedule, We were each assigned different sectors to focus on, and we helped each other out if we were having any difficulties. we really appreciated the way we worked together. Our ability to communicate effectively was what made us such a good team. People expressed concerns clearly and openly, so we resolved issues as soon as they arose.</p>

          </Container>
        </div>
        <Container>
          <h1 class='team'>Our Team</h1>
          <div class='general'>

            <div class='cards'>
              <Card style={{ width: '20rem' }}>
                <Card.Img class='profileImg' variant="top" style={{ height: '350px' }} src={img} />
                <Card.Body>
                  <Card.Title class='title' >Riahn Foudeh</Card.Title>
                  <p class='des'> Software Developer</p>
                </Card.Body>

                <Card.Body class='gitHubAndLinkesInIcon'>
                  <Card.Link href="https://www.linkedin.com/in/rihan-foudeh-58919b216/" target="_blank"><img style={{ width: '1.5rem' }} src={imgLinkIn} alt="" /></Card.Link>
                  <Card.Link href="https://github.com/Rihanfoudeh" target="_blank"><img style={{ width: '1.5rem' }} src={imgGitHub} alt="" /></Card.Link>
                </Card.Body>
              </Card>

              <div>
                <Card style={{ width: '20rem' }}>
                  <Card.Img class='profileImg' variant="top" style={{ height: '350px' }} src={Rami} />
                  <Card.Body>
                    <Card.Title class='title' >Rami Zregat </Card.Title>
                    <p class='des'>Software Developer</p>

                  </Card.Body>

                  <Card.Body class='gitHubAndLinkesInIcon'>
                    <Card.Link href="https://www.linkedin.com/in/rami-zregat-319254214/"><img style={{ width: '1.5rem' }} src={imgLinkIn} alt="" /></Card.Link>
                    <Card.Link href="https://github.com/RamiZregat"><img style={{ width: '1.5rem' }} src={imgGitHub} alt="" /></Card.Link>
                  </Card.Body>
                </Card>


              </div>



              <div>
                <Card style={{ width: '20rem' }}>
                  <Card.Img class='profileImg' variant="top" style={{ height: '350px' }} src={Bashar} />
                  <Card.Body>
                    <Card.Title class='title' >Bashar Al-Damen</Card.Title>
                    <p class='des'> Software Developer</p>

                  </Card.Body>

                  <Card.Body class='gitHubAndLinkesInIcon'>
                    <Card.Link href="https://www.linkedin.com/in/bashar-al-damen/"><img style={{ width: '1.5rem' }} src={imgLinkIn} alt="" /></Card.Link>
                    <Card.Link href="https://github.com/BasharDamen"><img style={{ width: '1.5rem' }} src={imgGitHub} alt="" /></Card.Link>
                  </Card.Body>
                </Card>


              </div>



            </div>
            <div class='cards'>
              <Card style={{ width: '20rem' }}>
                <Card.Img class='profileImg' variant="top" style={{ height: '350px' }} src={Aseel} />
                <Card.Body>
                  <Card.Title class='title' >Aseel Al-Saqer</Card.Title>
                  <p class='des'>Software Developer</p>

                </Card.Body>

                <Card.Body class='gitHubAndLinkesInIcon'>
                  <Card.Link href="https://www.linkedin.com/in/aseel-al-saqer-176439198/"><img style={{ width: '1.5rem' }} src={imgLinkIn} alt="" /></Card.Link>
                  <Card.Link href="https://github.com/Aseelalsaqer"><img style={{ width: '1.5rem' }} src={imgGitHub} alt="" /></Card.Link>
                </Card.Body>
              </Card>


              <div>
                <Card style={{ width: '20rem' }}>
                  <Card.Img class='profileImg' variant="top" style={{ height: '350px' }} src={Qais} />
                  <Card.Body>
                    <Card.Title class='title' >Qais Alshorman</Card.Title>
                    <p class='des'>Software Developer</p>

                  </Card.Body>

                  <Card.Body class='gitHubAndLinkesInIcon'>
                    <Card.Link href="https://www.linkedin.com/in/qais-alshorman/"><img style={{ width: '1.5rem' }} src={imgLinkIn} alt="" /></Card.Link>
                    <Card.Link href="https://github.com/QaisAlshorman"><img style={{ width: '1.5rem' }} src={imgGitHub} alt="" /></Card.Link>
                  </Card.Body>
                </Card>


              </div>



              <div>
                <Card style={{ width: '20rem' }}>
                  <Card.Img class='profileImg' variant="top" style={{ height: '350px' }} src={Nedal} />
                  <Card.Body>
                    <Card.Title class='title' > Nedal Al-Saleh</Card.Title>
                    <p class='des'>Software Developer</p>

                  </Card.Body>

                  <Card.Body class='gitHubAndLinkesInIcon'>
                    <Card.Link href="https://www.linkedin.com/in/nedal-al-saleh-4b0a271bb/"><img style={{ width: '1.5rem' }} src={imgLinkIn} alt="" /></Card.Link>
                    <Card.Link href="https://github.com/Nedal1994"><img style={{ width: '1.5rem' }} src={imgGitHub} alt="" /></Card.Link>
                  </Card.Body>
                </Card>


              </div>





            </div>
          </div>
        </Container>
      </main>

    )
  }
}

export default aboutUs