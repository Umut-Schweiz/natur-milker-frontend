import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SearchBoxArea = () => {
  return (
    <Container>
      <h2 className='mb-5' id='searchboxtext'>Find Your Natural Products</h2>
      <Row className='justify-content-md-center'>
        <Col  lg='3'>
        <Form.Group>
          <Form.Control as='select' size='lg'>
            <option className='option' selected>
              Cantons
            </option>
            <option className='option'>
              BERN
            </option>
            <option className='option'>
              ZURICH
            </option>
            <option>
              LUZERN
            </option>
            <option>
              GENEVE
            </option>
          </Form.Control>
        </Form.Group>
        </Col>
        <Col lg='3' md='auto'>
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
        <Col xs lg='1'>
        <Link to='/product-search-result'>
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
