import HomePage from './components/home/Home'
import ProductsSearchResults from './components/ProductsSearchResults/ProductsSearchResults'
import ProductDetail from './components/home/ProductDetail'
import MyProfilePage from './components/MyProfilePage/MyProfilepage'
import UpdateProfileInfo from './components/MyProfilePage/UpdateProfileInfo/UpdateProfileInfo'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'

const App =  () => {
 
  const [productsforHomePage, setProductForHomepage] = useState([])
  const [productsforProductDetailsPage, setProductForDetails] = useState([])
 // const [selectedProduct, setselectedProductId] = useState([])
  
  //let selectedProductId = '1'
  
  const APP_URL_HOME_PAGE = `http://localhost:3005/products/homepage`
  const APP_URL_DETAILS_PAGE = `http://localhost:3005/products/productdetails`
  //const APP_URL_SELECTED_PRODUCT = `http://localhost:3005/products/productdetails/${selectedProductId}`


  // useEffect(() => {
  //   loadProductDataForProductDetails()
  // },[])

  // const loadProductDataForProductDetails = async () => {
  //   const response = await fetch(APP_URL_SELECTED_PRODUCT)
  //   const data = await response.json()
  //   setselectedProductId(data)
  // }


  useEffect(() => {
    loadProductDataForHomepage()
  },[])

  const loadProductDataForHomepage = async () => {
    const response = await fetch(APP_URL_HOME_PAGE)
    const data = await response.json()
    setProductForHomepage(data)
  }

  
  useEffect(() => {
    loadProductDataForDetails()
  },[])

  const loadProductDataForDetails = async () => {
    const response = await fetch(APP_URL_DETAILS_PAGE)
    const data = await response.json()
    setProductForDetails(data)
  }

  
  return (
    <>

    <Router>
    <Header/>
      <div>
        <Switch>
          <Route exact path='/'>
            <HomePage product={productsforHomePage}/>
          </Route>
          <Route path='/product-search-result'>
            <ProductsSearchResults/>
          </Route>
          <Route path='/product-detail' >
            <ProductDetail  product={productsforProductDetailsPage} />
          </Route>
          <Route path='/my-profile-page'>
            <MyProfilePage/>
          </Route>
          <Route path='/update-profile-info'>
            <UpdateProfileInfo/>
          </Route>
          <Route path='/create-product'>
            <UpdateProfileInfo/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App
