import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchFromAPI} from '../utils/fetchFromAPI'
const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState(null);
  const { webID } = useParams(); // Get the webID from the URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch product details based on the webID from the URL
        const data = await fetchFromAPI('products/detail', webID);
        setProductDetail(data.payload);
      } catch (error) {
        console.log(error);
      }
    };

    if (webID) {
      fetchData();
    }
  }, [webID]);

  if (!productDetail) return <h2>Loading...</h2>;

  const { image, productTitle, rating } = productDetail;

  return (
    <div>
      <div>
        <h2>Product Details</h2>
        <p>Product Name: {productTitle}</p>
        <p>Image URL: {image.url}</p>
        {/* Include other product details here */}
      </div>
    </div>
  );
};

export default ProductDetail;
