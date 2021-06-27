import { Container, Row, Col } from 'react-bootstrap'
import SiteLogo from './SiteLogo'
import './HeaderHomePage.css'
import LoginButton from '../LoginButtons/LoginButton'
import TemporaryLogin from './TemporaryLogin'

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
        <Col md='auto'>
        <TemporaryLogin/>
        </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default HeaderHomePage
