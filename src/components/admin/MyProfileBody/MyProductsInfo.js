import { Container, Row, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyProductsInfo = (props) => {

  return (

    <Container>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Explanation
              </th>
              <th>
                ProductId
              </th>
              <th>
                Price
              </th>
              <th>
                Address
              </th>
              <th>
                Update Product
              </th>
              <th>
                Delete Product
              </th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((product) => <tr key={props.ProductId}>
                                               <td>
                                                 {product.Name}
                                               </td>
                                               <td>
                                                 {product.Explanation}
                                               </td>
                                               <td>
                                                 {product.ProductId}
                                               </td>
                                               <td>
                                                 {product.Price}
                                               </td>
                                               <td>
                                                 {product.Address}
                                               </td>
                                               <td>
                                                 <Link to={`/update-product-info/${product.ProductId}`}>
                                                 <Button variant='success'>
                                                   Update Product
                                                 </Button>
                                                 </Link>
                                               </td>
                                               <td>
                                                 <Button variant='danger'>
                                                   Delete Product
                                                 </Button>
                                               </td>
                                             </tr>
             )}
          </tbody>
        </Table>
      </Row>
      <Row>
        <Link to={`/create-product/${props.producerId}`}>
        <Button variant='success'>
          Create New Product
        </Button>
        </Link>
      </Row>
    </Container>
  )
}

export default MyProductsInfo
