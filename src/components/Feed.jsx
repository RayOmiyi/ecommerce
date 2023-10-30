import React, { useState, useEffect } from 'react';
import Header from './Header';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import DemoProduct from './DemoProduct';
import Products from './Products';
import '../Styles/Feed.css'
const Feed = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromAPI('products/list');
        setProducts(data.payload.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h2 className='Head'>Featured Products</h2>
      <DemoProduct products={products} />
    </div>
  );
};

export default Feed;
