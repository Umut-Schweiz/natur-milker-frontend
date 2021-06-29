import { Container, Row, Col  } from 'react-bootstrap'
import ProductCard from './ProductCard'

const AdvicedProductsArea = (props) => {
  return (

    <Container>
      <Row>
        {props.product.map((product, index) => <Col sm={4} key={index}>
                                               <ProductCard product={product} />
                                               </Col>
         )}
      </Row>
    </Container>

  )
}

export default AdvicedProductsArea
