import React from 'react';
import products from '../products';
import { Row,Col } from 'react-bootstrap';
import Product from '../components/Product';
const HomeScreen = () => {
    return (
        <div>
            <h1>Products</h1>
            <Row>
                {products.map(product=>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                        <Product product={product} key={product._id} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
