import { Container, Row, Col } from 'react-bootstrap'
import ProductPhotoGallery from './ProductPhotoGallery'
import ProductInfo from './ProductInfo'
import './DetailedProduct.css'

const DetailedProduct = (props) => {
  return (
    <Container className='detailed-product'>
      <Row>
        <h3>Product Details</h3>
      </Row>
      <Row>
        <Col>
        <ProductPhotoGallery/>
        </Col>
        <Col>
        <ProductInfo selectedProduct={props.selectedProduct} />
        </Col>
      </Row>
    </Container>

  )
}
export default DetailedProduct
