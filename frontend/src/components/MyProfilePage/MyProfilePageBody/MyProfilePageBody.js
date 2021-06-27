import {Container,Tab,Nav,Row,Col} from 'react-bootstrap'
import './MyProfilePageBody.css'
import MyProfileInfo from './MyProfileInfo/MyProfileInfo'
import MyProuductsInfo from './MyProductsInfo/MyProductsInfo'

const MyProfilePageBody = () =>{
    return (
         <Container className="profile-body-container container-fluid">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">My Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">My Product</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          <MyProfileInfo/>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <MyProuductsInfo/>  
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
</Container>
    )
}

export default MyProfilePageBody