import { Container, Row, Col, Button } from 'react-bootstrap'
import SearchBoxProducts from './SearchBoxProducts'
import SearchBoxCantons from './SearchBoxCantons'
import { Link } from 'react-router-dom'
import './SearchBoxArea.css'

const SearchBoxArea = () => {
  return (
    <Container>
      <h2 id='searchboxtext'>Find Your Milker</h2>
      <Row className='justify-content-md-center'>
        <Col xs lg='2'>
        <SearchBoxCantons/>
        </Col>
        <Col md='auto'>
        <SearchBoxProducts/>
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
