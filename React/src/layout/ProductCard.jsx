import React from 'react'
import { Card, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <Col>

      <Card style={{ width: '15rem' }} className='card'>

        <Link to={`/product/${product.id}`}>

          <Card.Img className='image' variant="top" src={product.image} /> <br />

        </Link>

        <Card.Body>
          


          

          <Card.Title>{product.title}</Card.Title>

          <Card.Text>

            <b className='price'>Price: {product.price} $</b> <br />
            <b><details className='price'> <p className='descrpition'>{product.description}</p></details></b>
            <b className='price'>Stock: {product.rating.count}</b>

          </Card.Text>

          <Link to={`/product/${product.id}`}>

            <Button variant="primary">Add to Cart</Button>

          </Link>

        </Card.Body>

      </Card>

    </Col>
  )
}

export default ProductCard
