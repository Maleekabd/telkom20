import { Card, Container, Row, Col, Image } from "react-bootstrap"
import Kingdom from '../assets/kingdom.jpg'
import Hatarakumaousama from '../assets/hatarakumaousama.png'
import isekaimeikyuudeharemwo from '../assets/isekaimeikyuudeharemwo.jpg'

const Anime = () => {
  return (
    <>
      <aside>
        <div className='aside bg-dark'>
          
        </div>
      </aside>
      <div id="features">
        <Container>
          <br />
          <h1 className="text-dark text-center headStyle">On-Going Anime</h1>
          <Row>
            <Col md={3} className="animeWrapper">
              <Card className="text-dark animeCover">
                <Image src={Hatarakumaousama} alt="hatarakumaousama image" className="images" />
                <div>
                  <div>
                    <Card.Title className="text-center">BLEACH</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={3} className="animeWrapper">
              <Card className="text-dark animeCover">
                <Image src={isekaimeikyuudeharemwo} alt="isekaimeikyuudeharemwo image" className="images" />
                <div>
                  <div>
                    <Card.Title className="text-center">BLEACH</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={3} className="animeWrapper">
              <Card className="text-dark animeCover">
                <Image src={Kingdom} alt="kingdom image" className="images" />
                <div>
                  <div>
                    <Card.Title className="text-center">BLEACH</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={3} className="animeWrapper">
              <Card className="text-dark animeCover">
                <Image src={Hatarakumaousama} alt="hatarakumaousama image" className="images" />
                <div>
                  <div>
                    <Card.Title className="text-center">BLEACH</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={3} className="animeWrapper">
              <Card className="text-dark animeCover">
                <Image src={Hatarakumaousama} alt="hatarakumaousama image" className="images" />
                <div>
                  <div>
                    <Card.Title className="text-center">BLEACH</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={3} className="animeWrapper">
              <Card className="text-dark animeCover">
                <Image src={Hatarakumaousama} alt="hatarakumaousama image" className="images" />
                <div>
                  <div>
                    <Card.Title className="text-center">BLEACH</Card.Title>
                    <Card.Text className="text-left">
                      This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Anime