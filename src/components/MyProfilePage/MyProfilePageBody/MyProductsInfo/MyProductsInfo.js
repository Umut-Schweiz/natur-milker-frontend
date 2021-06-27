import ProductsTable from './ProductsTable'

import { Container, Row } from 'react-bootstrap'
import CreateNewProductButton from './CreateNewProductButton'

const MyProductsInfo = () => {
  return (

    <Container>
      <Row>
        <ProductsTable/>
      </Row>
      <Row>
        <CreateNewProductButton/>
      </Row>
    </Container>
  )
}

export default MyProductsInfo
