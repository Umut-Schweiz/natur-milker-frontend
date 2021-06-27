import { Container, Row, Col } from 'react-bootstrap'
import AboutUs from './AboutUs'
import ContactArea from './ContactArea'
import SocialArea from './SocialArea'
import SendUsMessage from './SendUsMessage'
import './Footer.css'

const Footer = () => {
  return (
    <Container className='footer-container' fluid>
      <Row>
        <Col>
        <AboutUs/>
        </Col>
        <Col>
        <SocialArea/>
        </Col>
        <Col>
        <SendUsMessage/>
        </Col>
        <Col>
        <ContactArea/>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
