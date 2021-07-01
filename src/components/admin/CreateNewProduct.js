import { Form, Button } from 'react-bootstrap'
import { useState} from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


const CreateNewProduct = () =>{


    const { producerId }  = useParams()
   
    const [newProduct, setNewProduct] = useState({
    })
    
    const handleSubmit = async (e) => {
     
      e.preventDefault()
      fetch('http://localhost:3005/products', {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>
            Name
          </Form.Label>
          <Form.Control
            onChange={e => setNewProduct({...newProduct, Name: e.target.value , ProducerId:producerId,ProductId:uuidv4()})}
            name='Name'
            type='text'
            placeholder='Normal text' />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Price
          </Form.Label>
          <Form.Control
            onChange={e => setNewProduct({ ...newProduct, Price: e.target.value })}
            type='text'
            name='Price'
            placeholder='Normal text' />
        </Form.Group>
        <Form.Group>
          <Form.Label>
           Address
          </Form.Label>
          <Form.Control
            onChange={e => setNewProduct({ ...newProduct, Address: e.target.value })}
            type='text'
            name='Address'
            placeholder='Normal text' />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>
            Explanation
          </Form.Label>
          <Form.Control
            onChange={e => setNewProduct({ ...newProduct,  Explanation: e.target.value })}
            name='Explanation'
            as='textarea'
            rows={3}
            placeholder='Normal text' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    )
}
export default CreateNewProduct