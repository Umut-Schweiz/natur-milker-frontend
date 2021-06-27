import { Card } from 'react-bootstrap'

const ProductCard = (props) => {
  return (

    <Card key={props.index}>
      <Card.Img variant='top' src='./images/farm.jpg' />
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
