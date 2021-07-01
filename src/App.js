import HomePage from './components/home/Home'
import ProductDetail from './components/home/ProductDetail'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ProductSearchResult from './components/home/ProductsSearchResults'
import MyProfilePage from './components/admin/MyProfilePage'
import CreateNewProduct from './components/admin/CreateNewProduct'
import UpdateProfileInfo from './components/admin/UpdateProfileInfo'
import UpdateProductInfo from './components/admin/UpdateProductInfo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

const App =  () => {
 
  const [productsforHomePage, setProductForHomepage] = useState([])
      
  const APP_URL_HOME_PAGE = `http://localhost:3005/products/homepage`
  
  useEffect(() => {
    loadProductDataForHomepage()
  },[])

  const loadProductDataForHomepage = async () => {
    const response = await fetch(APP_URL_HOME_PAGE)
    const data = await response.json()
    setProductForHomepage(data)
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
          <Route path='/product-detail/:productId'  >
            <ProductDetail product={productsforHomePage} />
          </Route>
          <Route path='/my-profile-page'>
            <MyProfilePage/>
          </Route>
          <Route path='/create-product/:producerId'>
            <CreateNewProduct/>
          </Route> 
           
          <Route path='/update-profile-info/:ProducerId'>
            <UpdateProfileInfo/>
          </Route>
          <Route path='/update-product-info/:ProductId'>
            <UpdateProductInfo/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
    
    </>
  )
}

export default App
