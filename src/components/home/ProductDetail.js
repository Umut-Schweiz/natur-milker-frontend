import { Container, Row, Col, Tabs, Tab, Carousel } from 'react-bootstrap'

const DetailedProduct = (props) => {
  return (
    <Container className='detailed-product'>
      <Row>
        <h3>Product Details</h3>
      </Row>
      <Row>
        <Col>
        <Carousel fade>
          <Carousel.Item>
            <img className='d-block w-100' src='./images/farm-1.jpg' alt='First slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src='./images/farm-2.jpg' alt='Second slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src='./images/farm-3.jpg' alt='Third slide' />
          </Carousel.Item>
        </Carousel>
        </Col>
        <Col>
        <Tabs defaultActiveKey='profile' id='uncontrolled-tab-example'>
          <Tab eventKey='description' title='Description'>
            sdasdasd
          </Tab>
          <Tab eventKey='contact' title='Contact'>
            dasdasda
          </Tab>
          <Tab eventKey='navigation' title='Navigation'>
            sdasdasdada
          </Tab>
        </Tabs>
        </Col>
      </Row>
    </Container>

  )
}
export default DetailedProduct
