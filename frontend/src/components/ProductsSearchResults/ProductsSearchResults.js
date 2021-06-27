import './ProductsSearchResults.css'
import { Container, Row, Col } from 'react-bootstrap'
import HeaderHomePage from './HeaderHomePage/HeaderHomePage'
import SearchBoxArea from './SearchBoxArea/SearchBoxArea'
import SearchedProductsArea from './SearchedProductsArea/SearchedProductsArea'

const HomePage = () => {
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
      <Row className='searchedProductsArea'>
        <Col>
        <SearchedProductsArea />
        </Col>
      </Row>
    </Container>

  )
}

export default HomePage
