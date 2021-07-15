import { Form, Button } from 'react-bootstrap'
import { useState} from 'react'
import { useParams } from 'react-router-dom'


const UpdateProduct = () =>{

  const { ProductId }  = useParams()
     
  const [updatedProduct, setUpdatedProduct] = useState({
  })
  
  const handleSubmit = async (e) => {
   
    e.preventDefault()
    fetch(`http://localhost:3005/products/${ProductId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedProduct),
      headers: { 'Content-Type': 'application/json' },
    })
  }

    return (
      <div className='d-flex justify-content-center'>
      <Form className='m-5 d-block w-25' onSubmit={handleSubmit}>
      <h3 className='updatebio-form-header mb-3'>Update Your Product Info</h3>
      <Form.Group>
        <Form.Label>
          Name
        </Form.Label>
        <Form.Control
          onChange={e => setUpdatedProduct({...updatedProduct, Name: e.target.value })}
          name='Name'
          type='text'
          placeholder='Normal text' />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          Price
        </Form.Label>
        <Form.Control
          onChange={e => setUpdatedProduct({ ...updatedProduct, Price: e.target.value })}
          type='text'
          name='Price'
          placeholder='Normal text' />
      </Form.Group>
      <Form.Group>
        <Form.Label>
         Address
        </Form.Label>
        <Form.Control
          onChange={e => setUpdatedProduct({ ...updatedProduct, Address: e.target.value })}
          type='text'
          name='Address'
          placeholder='Normal text' />
      </Form.Group>
      <Form.Group controlId='exampleForm.ControlTextarea1'>
        <Form.Label>
          Explanation
        </Form.Label>
        <Form.Control
          onChange={e => setUpdatedProduct({ ...updatedProduct,  Explanation: e.target.value })}
          name='Explanation'
          as='textarea'
          rows={3}
          placeholder='Normal text' />
      </Form.Group>
      <Button className='btn-button' variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
    </div>
  )
}
export default UpdateProduct