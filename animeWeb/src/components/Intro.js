import { Col, Container, Row } from 'react-bootstrap';


const Intro = () => {
  return (
    <div id="landingpage">
      <div className='intro'>
        <Container className='text-center d-flex justify-content-center align-items-center'>
          <Row>
            <Col>
              <div className='title'>NEKOJARANIME</div>
              {/* modif ganti pake search */}
              <input className="inputIntro" placeholder='Search your anime'></input>
              <div className='introButton mt-4 text-center'>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}


export default Intro