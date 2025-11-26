import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
   <ul>
      <li><Link to='/'>Product</Link></li>
      <li><Link to='/add'>Add Product</Link></li>
      <li><Link to='/update'>Update Product</Link></li>
      <li><Link to='/delete'>Delete product</Link></li>
      <li><Link to='/logout'>Log Out</Link></li>
      <li><Link to='/profile'>Profile</Link></li>
   </ul>
  )
}

export default Nav