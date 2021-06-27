import './ProductDetailsPage.css'
import { Container, Row, Col } from 'react-bootstrap'
import HeaderDetailPage from './HeaderDetailPage/HeaderDetailPage'
import DetailedProduct from './DetailedProduct/DetailedProduct'
import AdvicedProductsArea from './AdvicedProductsDetails/AdvicedProductsArea'

const ProductDetailsPage = (props) => {

  return (
    <Container>
      <Row>
        <Col>
        <HeaderDetailPage />
        </Col>
      </Row>
      <Row>
        <Col>
        <DetailedProduct selectedProduct={props.selectedProduct} />
        </Col>
      </Row>
      <Row>
        <Col>
        <AdvicedProductsArea product={props.product} />
        </Col>
      </Row>
    </Container>

  )
}
export default ProductDetailsPage
