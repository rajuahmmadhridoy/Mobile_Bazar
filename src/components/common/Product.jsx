import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgUrlParser from 'utils/imgUrlParser';

const Product = ({ product }) => {
    // const url = process.env.REACT_APP_IMAGE_BASE_URL
    const { image, _id } = product;
    return (
        <Col md={3}>
            <Card>
                <Card.Img
                    variant="top"
                    src={imgUrlParser(image, 'w_400,h_400,c_thumb,f_auto,q_auto')}
                />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Link to={`/product/${_id}`}>
                        {' '}
                        <button className="bg-primary text-white border w-100 rounded">add</button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
