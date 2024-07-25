import React from 'react'
import ProductCard from '../layout/ProductCard'
import ProductData from '../data/ProductData'
import { Row } from 'react-bootstrap'


const Home = () => {

  return (
    <Row>


      <h1>Latest Products</h1>



      {ProductData.map(product =>
        <ProductCard product={product} />

      )}



    </Row>
  )
}

export default Home
