import { Container,Col,Row } from 'react-bootstrap'
import SiteLogo from './SiteLogo'
import HomeButton from './HomeButton'
import NameInfo from './NameInfo'
import LogOutButton from './LogOutButton'

 const MyProfilePageHeader = () =>{
     return(

        <Container className='MyProfile-header-container' fluid>
        <Row>
          <Col>
          <SiteLogo/>
          </Col>
          <Col md='auto'>
              <HomeButton/>
          </Col>
          <Col md='auto'>
              <NameInfo/>
          </Col>
          <Col md='auto'>
              <LogOutButton/>
          </Col>
        </Row>
      </Container>
     )
 }
 export default MyProfilePageHeader