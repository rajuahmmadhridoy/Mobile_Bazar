import React from 'react';
import { Col, Container, Card, ListGroup, Carousel, Row } from 'react-bootstrap';
import one from 'assets/images/banner1.png';
const Banner = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}>
                        <Card style={{ width: '18rem' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col lg={9}>
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100" src={one} alt="Third slide" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;
