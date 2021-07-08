import { Container, Col, Row, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyProfilePageHeader = (props) => {
  return (

    <Container className='MyProfile-header-container m-5' fluid>
      <Row>
        <Col>
        
        </Col>
        <Col md='auto'>
        <Link to='/'>
        
        </Link>
        </Col>
        <Col md='auto'>
        {props.producer.FirstName}
        {props.producer.LastName}
        </Col>
        <Col md='auto'> 
        <Button className='btn-button' variant='success'>
          Logout 
        </Button>
        </Col>
      </Row>
    </Container>
  )
}
export default MyProfilePageHeader
