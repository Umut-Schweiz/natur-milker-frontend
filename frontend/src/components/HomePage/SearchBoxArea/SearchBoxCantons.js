import { Form } from 'react-bootstrap'

const SearchBoxCantons = () => {
  return (
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

  )
}

export default SearchBoxCantons
