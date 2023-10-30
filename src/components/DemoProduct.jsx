import React from 'react'
import {ProductCard} from './index'
import '../Styles/DemoPoduct.css'


const DemoProduct = ({ products }) => {
  // console.log(products);
  const featuredProducts = products.slice(0, 10);

  return (
    <div>
      <div className="product-grid">
        {featuredProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default DemoProduct;
