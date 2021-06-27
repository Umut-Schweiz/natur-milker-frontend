import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SearchBoxArea = () => {
  return (
    <Container>
      <h2 id='searchboxtext'>Find Your Milker</h2>
      <Row className='justify-content-md-center'>
        <Col xs lg='2'>
        <Form.Group>
          <Form.Control as='select' size='lg'>
            <option selected>
              Cantons
            </option>
            <option>
              *BERN
            </option>
            <option>
              *ZURICH
            </option>
            <option>
              *LUZERN
            </option>
            <option>
              *GENF
            </option>
          </Form.Control>
        </Form.Group>
        </Col>
        <Col md='auto'>
        <Form.Group>
          <Form.Control as='select' size='lg'>
            <option selected>
              Products
            </option>
            <option>
              *Milk
            </option>
            <option>
              *Egg
            </option>
            <option>
              *Apple
            </option>
            <option>
              *Orange
            </option>
          </Form.Control>
        </Form.Group>
        </Col>
        <Col xs lg='2'>
        <Link to='/productsearchresult'>
        <Button variant='outline-secondary' className='button-search' size='lg'>
          Search
        </Button>
        </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBoxArea
