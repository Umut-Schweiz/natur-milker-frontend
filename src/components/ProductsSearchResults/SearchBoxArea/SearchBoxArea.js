import { Container, Row, Col, Button } from 'react-bootstrap'
import SearchBoxProducts from './SearchBoxProducts'
import SearchBoxCantons from './SearchBoxCantons'

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
        <Button variant='outline-secondary' className='button-search' size='lg'>
          New Search
        </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBoxArea
