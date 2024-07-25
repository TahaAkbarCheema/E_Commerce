import React from 'react'
import { Col, Row, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ProductData from '../data/ProductData'
import Ratings from './Ratings';
const SingleProduct = () => {
    const { id } = useParams();  //url id
    const product = ProductData.find(product => product.id == id)



    return (
        <Row>

            <Col>

            
                <Card className='card2'>
                    <Card.Img className='image2' variant="top" src={product.image} />
                    </Card>
                    
                  
            </Col>

            <Col>
                <Card className='card2'>
                    <Card.Body>
                        <Card.Title> {<h1>{product.title}</h1>}</Card.Title>
                        <Card.Text>
                            <h2>Description</h2>
                            {product.description} <br /> <hr />

                            <p><b> <h2>Catagory: </h2> </b> {product.category}</p> <hr />
                            <p><b><h2>Stock:</h2></b>{product.rating.count}</p><hr />
                            <p><b><h2>Rating: </h2> </b>{product.rating.rate}</p>

                           <Ratings ratingofproduct={product.rating.rate}/>
                            
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default SingleProduct
