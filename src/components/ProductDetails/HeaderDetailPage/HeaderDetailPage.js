import { Container, Row,Col } from "react-bootstrap";
import './HeaderDetailPage.css'
import SiteLogo from './SiteLogo'
import LoginButton from '../LoginButtons/LoginButton'

const HeaderDetailPage = () =>{
return (
    <Container className='detail-page-header-container' fluid>
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
export default HeaderDetailPage