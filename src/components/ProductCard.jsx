import React from 'react'
import '../Styles/ProductCard.css'
import { Link } from 'react-router-dom';


const ProductCard = ({product}) => {
  const { 
  webID,
  image, 
  rating, 
  category, 
  productTitle } = product;


  return (
    <div>
      <div className='Container'>
        <div className='Image-container'>
          {/* image */}
          <div className='Image'>
          <img src={image.url} alt="images" className='image'/>
          {/* rating&productTitle */}
          <div>
            <Link to={`/products/${webID}`}>
            <h1>{productTitle.slice(0,20)}</h1>
            </Link>
          </div>
          <div>{rating.avgRating}</div>
          <div>{category}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard