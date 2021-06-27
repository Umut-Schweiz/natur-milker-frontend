import { CardDeck } from 'react-bootstrap'
import ProductCard from './ProductCard'

const AdvicedProductsArea = () => {
  return (
    <CardDeck className='adviced-products-container'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </CardDeck>
  )
}

export default AdvicedProductsArea
