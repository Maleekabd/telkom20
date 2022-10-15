import { Card, Container, Row, Col, Image } from "react-bootstrap"
import bleach from '../assets/bleach.png'
import naruto from '../assets/naruto.png'
import onePiece from '../assets/onePiece.png'

const Trending = () => {
  return (
    <>
      <div className="aside"></div>
      <section>
        <div id="home">
          <Container>
            <br />
            <h1 className="text-dark text-center headStyle">Trending Anime</h1>
            <Row>
              <Col md={4} className="animeWrapper">
                <Card className="text-dark animeOnGoing">
                  <Image src={bleach} alt="Bleach image" className="images1" />
                  <div>
                    <div>
                      <Card.Title className="text-center">BLEACH</Card.Title>
                      <Card.Text className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus sit amet dictum.
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md={4} className="animeWrapper">
                <Card className="text-dark animeOnGoing">
                  <Image src={naruto} alt="Naruto image" className="images1" />
                  <div>
                    <div>
                      <Card.Title className="text-center">NARUTO SHIPPUDEN</Card.Title>
                      <Card.Text className="align-items-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus sit amet dictum.
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col md={4} className="animeWrapper">
                <Card className="text-dark animeOnGoing">
                  <Image src={onePiece} alt="one piece image" className="images1" />
                  <div>
                    <div>
                      <Card.Title className="text-center">ONE PIECE MOVIE : RED</Card.Title>
                      <Card.Text className="text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus sit amet dictum.
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default Trending