import { Container, Row, Col, Image } from 'react-bootstrap'
import NavBar from '../auth/nav-bar'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {

  const {isAuthenticated} = useAuth0()
  const { loginWithRedirect } = useAuth0()

  return (
    <Container className='home-page-header-container' fluid>
      <Row>
        <Col>
        <Link to='/'>
        <Image src='images/Natur Milker Logo.png' rounded className='logo' />
        </Link>
        </Col>
        <Col>
        <Link to='/'>
          HOME
        </Link>
        </Col>
        <Col>
        <Link to='/'>
          ABOUT
        </Link>
        </Col>
        <Col md='auto'>
       {isAuthenticated ? 
        <Link to='my-profile-page'> My Account
          </Link> 
        : <Link onClick={() => loginWithRedirect()}  >  My Account Login
        </Link> }
        <NavBar/>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
