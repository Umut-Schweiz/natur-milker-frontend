import HomePage from './components/HomePage/HomePage'
import ProductsSearchResults from './components/ProductsSearchResults/ProductsSearchResults'
import ProductDetailsPage from './components/ProductDetails/ProductDetailsPage'
import MyProfilePage from './components/MyProfilePage/MyProfilepage'
import UpdateProfileInfo from './components/MyProfilePage/UpdateProfileInfo/UpdateProfileInfo'
import Footer from './components/Footer/Footer'
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
      <div>
        <Switch>
          <Route exact path='/'>
            <HomePage product={productsforHomePage}/>
          </Route>
          <Route path='/productsearchresult'>
            <ProductsSearchResults/>
          </Route>
          <Route path='/productsdetailspage' >
            <ProductDetailsPage  product={productsforProductDetailsPage} />
          </Route>
          <Route path='/myprofilepage'>
            <MyProfilePage/>
          </Route>
          <Route path='/updateprofileinfo'>
            <UpdateProfileInfo/>
          </Route>
          <Route path='/createproduct'>
            <UpdateProfileInfo/>
          </Route>
        </Switch>
      </div>
    </Router>
    <Footer/>
    </>
  )
}

export default App
