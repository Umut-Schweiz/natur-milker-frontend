import { Table } from 'react-bootstrap'
import UpdateProductButton from './UpdateProductButton'

const ProductsTable = () => {
  return (
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
            <UpdateProductButton/>
          </td>
        </tr>
      </tbody>
    </Table>

  )
}
export default ProductsTable
