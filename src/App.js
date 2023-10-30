import React, { useState } from 'react'
import { Feed, Navbar, ProductDetail, Products } from './components'
import { Route, Routes } from 'react-router-dom'
import Login from './routes/Login'
import Signup from './routes/SignUp'
import { AuthContextProvider } from './context/AuthContext'
import { fetchFromAPI } from './utils/fetchFromAPI'
const App = () => {
     const [products, setProducts] = useState([]);

  // Function to fetch products
  const fetchProducts = async () => {
    try {
      const data = await fetchFromAPI('products/list');
      setProducts(data.payload.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/products' 
        element={<Products products={products} fetchProducts={fetchProducts} />}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </AuthContextProvider>
    </div>
  )
}

export default App