import useAsync from 'hooks/useAsync';
import { React, useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import ProductService from 'services/ProductService';
import SkeletonMeterialUiDetailPage from 'skeletons/skeletonMeterialUiDetailPage';
import imgUrlParser from 'utils/imgUrlParser';

const ProductDetails = () => {
    const { id } = useParams();
    // const {  data, isLoading,isSuccess} = useAsync(() => ProductService.getProductById(id));
    const getProduct = useCallback(() => {
        // console.log('test',id);
        // console.log(typeof ProductService.getProductById);
        return ProductService.getProductById(id);
    }, [id]);
    const { data, isLoading, isSuccess } = useAsync(getProduct);
    // const {name} = data;
    console.log(data?.name, 11122233);
    return (
        <div className="product_details-Component">
            <Container>
                {isLoading && <SkeletonMeterialUiDetailPage loading={isLoading} />}
                {isSuccess && (
                    <div className="wrapper bg-white rounded">
                        <Row>
                            <Col md={6}>
                                <img
                                    className="w-100"
                                    src={imgUrlParser(data?.image)}
                                    alt={data.name}
                                />
                            </Col>
                            <Col md={6}>
                                <h5 className="pt-5">Name:{data.name}</h5>
                                <h5 className="pt-5">Price:{data.price}</h5>
                                <button className="bg-primary text-white border mt-5">
                                    Add To Card
                                </button>
                            </Col>
                        </Row>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default ProductDetails;
