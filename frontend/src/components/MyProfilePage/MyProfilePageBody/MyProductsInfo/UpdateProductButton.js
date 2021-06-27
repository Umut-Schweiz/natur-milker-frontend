import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UpdateProductButton = () => {
  return (
    <Link to='createproduct'>
    <Button variant='success'>
      Update Product
    </Button>
    </Link>
  )
}

export default UpdateProductButton
