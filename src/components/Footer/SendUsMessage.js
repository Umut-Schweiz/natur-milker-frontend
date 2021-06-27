import { Form, Button } from 'react-bootstrap'
import './SendUsMessage.css'

const SendUsMessage = () => {
  return (

    <Form.Group controlId='exampleForm.ControlTextarea1'>
      <Form.Label>
        Send Your Message
      </Form.Label>
      <Form.Control as='textarea' rows={5} />
      <Button className='sendMessage-button' variant='primary' type='submit'>
        Submit
      </Button>
    </Form.Group>

  )
}

export default SendUsMessage
