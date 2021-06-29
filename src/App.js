import HomePage from './components/home/Home'
import ProductDetail from './components/home/ProductDetail'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ProductSearchResult from './components/home/ProductsSearchResults'
import MyProfilePage from './components/admin/MyProfilePage'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'

const App =  () => {
 
  const [productsforHomePage, setProductForHomepage] = useState([])
  const [productsforProductDetailsPage, setProductForDetails] = useState([])
    
  const APP_URL_HOME_PAGE = `http://localhost:3005/products/homepage`
  const APP_URL_DETAILS_PAGE = `http://localhost:3005/products/productdetails`
 


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
            <HomePage  product={productsforHomePage}/>
          </Route>
          <Route path='/product-search-result' >
            <ProductSearchResult  product={productsforHomePage} />
          </Route>
          <Route path='/product-detail' >
            <ProductDetail   product={productsforProductDetailsPage} />
          </Route>
          <Route path='/my-profile-page'>
            <MyProfilePage/>
          </Route>
           {/*
          <Route path='/update-profile-info'>
            <UpdateProfileInfo/>
          </Route>
          <Route path='/create-product'>
            <UpdateProfileInfo/>
          </Route> */}
        </Switch>
      </div>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App
