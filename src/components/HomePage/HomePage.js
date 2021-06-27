import './HomePage.css'
import { Container, Row, Col } from 'react-bootstrap'
import HeaderHomePage from './HeaderHomePage/HeaderHomePage'
import SearchBoxArea from './SearchBoxArea/SearchBoxArea'
import AdvicedProductsArea from './AdvicedProductsHomePage/AdvicedProductsArea'

const HomePage = (props) => {
  return (

    <Container>
      {/* or fluid*/}
      <Row className='headerHomePage'>
        <Col>
        <HeaderHomePage />
        </Col>
      </Row>
      <Row className='searchBoxAreaMain'>
        <Col>
        <SearchBoxArea />
        </Col>
      </Row>
      <Row className='advicedProductsArea'>
        <Col>
        <AdvicedProductsArea product={props.product} />
        </Col>
      </Row>
    </Container>

  )
}

export default HomePage
