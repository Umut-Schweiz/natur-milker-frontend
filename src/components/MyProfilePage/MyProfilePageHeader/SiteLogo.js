import { Image } from 'react-bootstrap'
import './SiteLogo.css'
import logo from './Natur Milker Logo.png'

const SiteLogo = () => {
  return (
    <Image src={logo} rounded className='logo' />
  )
}

export default SiteLogo