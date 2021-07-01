import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AdvicedProductsArea = (props) => {
  return (

    <Container>
      <Row>
        {props.product.map((product, index) => <Col sm={4} key={index}>
                                               <Card key={props.index}>
                                                 <Link to={`/product-detail/${product.ProductId}`}>
                                                 <Card.Img variant='top' src='https://vanguardrenewables.com/wp-content/uploads/2020/09/RainbowFarm-1024x726.jpg' />
                                                 </Link>
                                                 <Card.Body>
                                                   <Card.Title>
                                                     {product.Name}
                                                   </Card.Title>
                                                   <Card.Text>
                                                     Kanton:
                                                     <br></br>
                                                     {product.Address}
                                                     <br></br>
                                                     Price:
                                                     <br></br>
                                                     {product.Price} CH
                                                   </Card.Text>
                                                 </Card.Body>
                                                 <Card.Footer>
                                                   <small className='text-muted'>{product.Explanation}</small>
                                                 </Card.Footer>
                                               </Card>
                                               </Col>
         )}
      </Row>
    </Container>

  )
}

export default AdvicedProductsArea
