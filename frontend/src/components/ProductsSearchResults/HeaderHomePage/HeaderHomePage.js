import { Container, Row, Col } from 'react-bootstrap'
import SiteLogo from './SiteLogo'
import './HeaderHomePage.css'
import LoginButton from '../LoginButtons/LoginButton'

const HeaderHomePage = () => {
  return (
    <Container className='home-page-header-container' fluid>
      <Row>
        <Col>
        <SiteLogo/>
        </Col>
        <Col md='auto'>
        <LoginButton/>
        </Col>
        <Col md='auto'>
        </Col>
      </Row>
    </Container>
  )
}

export default HeaderHomePage
