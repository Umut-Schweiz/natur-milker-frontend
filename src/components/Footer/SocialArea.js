import { ListGroup, Container, Row, Col } from 'react-bootstrap'
import { FaGoogle } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'

const SocialArea = () => {
  return (

    <Container>
      <Row>
        <Col>
        <h2>Follow us</h2>
        </Col>
      </Row>
      <Row>
        <Col>
        <ListGroup horizontal>
          <ListGroup.Item>
            <FaGoogle/>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaFacebookSquare/>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram/>
          </ListGroup.Item>
          <ListGroup.Item>
            <FiTwitter/>
          </ListGroup.Item>
        </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default SocialArea
