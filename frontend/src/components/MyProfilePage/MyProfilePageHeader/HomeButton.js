import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomeButton = () => {
  return (
    <Link to='/'>
    <Button variant='success'>
      GO Home
    </Button>
    </Link>
  )
}
export default HomeButton
