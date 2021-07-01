import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = (props) => {

  return (

    <Card key={props.index}>
      <Link to={`/product-detail/${props.product.ProductId}`}>
      <Card.Img variant='top' src='https://vanguardrenewables.com/wp-content/uploads/2020/09/RainbowFarm-1024x726.jpg' />
      </Link>
      <Card.Body>
        <Card.Title>
          {props.product.Name}
        </Card.Title>
        <Card.Text>
          Kanton:
          <br></br>
          {props.product.Address}
          <br></br>
          Price:
          <br></br>
          {props.product.Price} CH
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>{props.product.Explanation}</small>
      </Card.Footer>
    </Card>

  )
}

export default ProductCard
