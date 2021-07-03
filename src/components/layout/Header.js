import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import LoginButton from '../auth/LoginButton'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Container className='home-page-header-container' fluid>
      <Row>
        <Col>
        <Image src='./images/Natur Milker Logo.png' rounded className='logo' />
        </Col>
        <Col md='auto'>
        <LoginButton/>
        </Col>
        <Col md='auto'>
        <Col md='auto'>
        <Link to='my-profile-page'>
        <Button className="Temporary-Login btn-button" variant="success">
          Temporary Login
        </Button>
        </Link>
        </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
