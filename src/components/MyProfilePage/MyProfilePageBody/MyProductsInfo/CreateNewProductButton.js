import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CreateNewProductButton = () => {
  return (
    <Link to='createproduct'>
    <Button variant='success'>
      Create New Product
    </Button>
    </Link>
  )
}

export default CreateNewProductButton
