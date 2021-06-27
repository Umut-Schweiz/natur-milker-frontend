import { Form } from 'react-bootstrap'

const SearchBoxProducts = () => {
  return (
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

  )
}

export default SearchBoxProducts
