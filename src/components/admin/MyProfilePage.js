import { Col, Row, Container } from 'react-bootstrap'
import MyProfileHeader from './MyProfileHeader'
import MyProfileBody from './MyProfileBody/MyProfileBody'

const MyProfilePage = () => {
  return (

    <Container>
      <Row>
        <Col>
        <MyProfileHeader/>
        </Col>
      </Row>
      <Row>
        <Col>
        <MyProfileBody/>
        </Col>
      </Row>
    </Container>
  )
}
export default MyProfilePage
