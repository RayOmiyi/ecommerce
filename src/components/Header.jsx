import React from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'
import Pexel from '../assets/pexels-photo-4464821.png'

const Header = () => {
  return (
    <section className='section'>
      <div className='container'>
        {/* text */}
        <div className='text'>
          {/* pretitle */}
          <div className='pretitle'>
            <div className='trend'></div>New Trend
          </div>
          {/* title */}
          <h1 className='title'>AUTUMN SALE STYLISH <br/>
            <span className='span'>WOMENS</span>
          </h1>
          <li className='discover'>
          <Link to='/products'>
            Discover More
          </Link>
          </li>
        {/* image */}
        </div>
        <div>
          <img src={Pexel} alt="Pexel" />
        </div>
      </div>
    </section>
  )
}
export default Header