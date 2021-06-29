import { Container, Row, Table, Button } from 'react-bootstrap'

const MyProductsInfo = () => {
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
            <tr>
              <td>
                Yumurta
              </td>
              <td>
                1
              </td>
              <td>
                14.5-
              </td>
              <td>
                Güzel
              </td>
              <td>
                ndusad
              </td>
              <td>
                <Button variant='success'>
                  Update Product
                </Button>
              </td>
              <td>
                <Button variant='danger'>
                  Delete Product
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row>
        <Button variant='success'>
          Create New Product
        </Button>
      </Row>
    </Container>
  )
}

export default MyProductsInfo
