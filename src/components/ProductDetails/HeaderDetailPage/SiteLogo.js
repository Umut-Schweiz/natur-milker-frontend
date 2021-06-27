import {Container, Image} from 'react-bootstrap'
import './SiteLogo.css'
import logo from './Natur Milker Logo.png'

const SiteLogo = () => {
  return (
    <Container>
   
    <Image src={logo} rounded className='logo' />

    </Container>
  )
}

export default SiteLogo
