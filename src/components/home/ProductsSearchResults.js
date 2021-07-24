import { Container, Row, Col } from 'react-bootstrap'
import SearchBoxArea from './SearchBoxArea'
import ProductCard from './ProductCard'

const ProductSearchResults = (props) => {
  return (

    <Container>
      {/* or fluid*/}
      <Row className='searchBoxAreaMain'>
        <Col>
        <SearchBoxArea />
        </Col>
      </Row>
      <Row className='searchedProductsArea'>
        <Col>
        <Container>
          <Row className='border border-success h-100'>
          <h3>Here your search Results</h3>

          </Row>
          <Row>
            {props.product.map((product, index) => <Col sm={3} key={index}>
                                                   <ProductCard product={product} />
                                                   </Col>
             )}
          </Row>
        </Container>
        </Col>
      </Row>
    </Container>

  )
}

export default ProductSearchResults
