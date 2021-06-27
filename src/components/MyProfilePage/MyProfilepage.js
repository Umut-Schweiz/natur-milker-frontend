import { Col, Row, Container } from 'react-bootstrap'
import MyProfilePageHeader from './MyProfilePageHeader/MyProfilePageHeader'
import MyProfilePageBody from './MyProfilePageBody/MyProfilePageBody'

const MyProfilePage = () => {
  return (

    <Container>
      <Row>
        <Col>
        <MyProfilePageHeader/>
        </Col>
      </Row>
      <Row>
        <Col>
        <MyProfilePageBody/>
        </Col>
      </Row>
    </Container>
  )
}
export default MyProfilePage
