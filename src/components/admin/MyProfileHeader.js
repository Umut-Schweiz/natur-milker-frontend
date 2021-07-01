import { Container, Col, Row, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyProfilePageHeader = (props) => {
  return (

    <Container className='MyProfile-header-container' fluid>
      <Row>
        <Col>
        <Image src='./images/Natur Milker Logo.png' rounded className='logo' />
        </Col>
        <Col md='auto'>
        <Link to='/'>
        <Button variant='success'>
          GO Home
        </Button>
        </Link>
        </Col>
        <Col md='auto'>
        {props.producer.FirstName}
        {props.producer.LastName}
        </Col>
        <Col md='auto'> LogOutButton
        </Col>
      </Row>
    </Container>
  )
}
export default MyProfilePageHeader
