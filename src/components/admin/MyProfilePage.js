import { Col, Row, Container } from 'react-bootstrap'
import MyProfileHeader from './MyProfileHeader'
import MyProfileBody from './MyProfileBody/MyProfileBody'
import { useState, useEffect } from 'react'


const MyProfilePage = () => {

const [producer, setProducer] = useState([])
const [products, setProducts] = useState([])

const producerId = '456'

const APP_URL_PRODUCER = `http://localhost:3005/producer/${producerId}`
const APP_URL_PRODUCER_ALL_PRODUCTS = `http://localhost:3005/products/producer/${producerId}`

useEffect(() => {
  loadProducer()
},[])

const loadProducer= async () => {
  const response = await fetch(APP_URL_PRODUCER)
  const data = await response.json()
  setProducer(data)
}

useEffect(() => {
  loadProducts()
},[])

const loadProducts= async () => {
  const response = await fetch(APP_URL_PRODUCER_ALL_PRODUCTS)
  const data = await response.json()
  setProducts(data)
}



  return (

    <Container>
      <Row>
        <Col>
        <MyProfileHeader producer={producer} />
        </Col>
      </Row>
      <Row>
        <Col>
        <MyProfileBody producerId={producerId} products={products} producer={producer}/>
        </Col>
      </Row>
    </Container>
  )
}
export default MyProfilePage
