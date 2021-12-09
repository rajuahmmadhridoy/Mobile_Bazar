import React from 'react';
import { Card, Col } from 'react-bootstrap';
import imgUrlParser from 'utils/imgUrlParser';

const Product = ({ product }) => {
    // const url = process.env.REACT_APP_IMAGE_BASE_URL
    const { image } = product;
    return (
        <Col md={3}>
            <Card>
                <Card.Img
                    variant="top"
                    src={imgUrlParser(image, 'w_400,h_400,c_thumb,f_auto,q_auto')}
                />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;
