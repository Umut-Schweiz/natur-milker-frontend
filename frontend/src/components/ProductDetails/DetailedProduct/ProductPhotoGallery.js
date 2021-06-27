import { Carousel } from 'react-bootstrap'

const ProductPhotoGallery = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className='d-block w-100' src='./images/farm-1.jpg' alt='First slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='./images/farm-2.jpg' alt='Second slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='./images/farm-3.jpg' alt='Third slide' />
      </Carousel.Item>
    </Carousel>
  )
}
export default ProductPhotoGallery
