import useAsync from 'hooks/useAsync';
import { React, useCallback } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addToCart, updateQuantity } from 'redux/actions/cartActions';
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
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cartReducers.cart);
    // console.log(cartData?.cart?.items, 'cart data');
    const idStore = [];
    for (const pd in cartData?.items) {
        const element = cartData?.items[pd];
        // console.log(idStore, 'i1111d ');
        idStore.push(element);
    }

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
                                <h5 className="pt-3">Name:{data.name}</h5>
                                <h5 className="pt-3">Price:{data.price}</h5>
                                <h5 className="pt-3">Price:{data._id}</h5>

                                {!idStore?.find((x) => x.item._id === data._id) ? (
                                    <>
                                        <button
                                            onClick={() => dispatch(addToCart(data))}
                                            className="bg-primary text-white border mt-3 mb-3"
                                        >
                                            Add To Card
                                        </button>
                                        {idStore.map((ids) => console.log(ids.item._id, 'ids'))}
                                    </>
                                ) : (
                                    <>
                                        {
                                            <>
                                                <button
                                                    onClick={() =>
                                                        dispatch(
                                                            updateQuantity({
                                                                pd: cartData?.cart?.items,
                                                                type: 'plus',
                                                            })
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        dispatch(
                                                            updateQuantity({
                                                                pd: cartData?.cart?.items,
                                                                type: 'plus',
                                                            })
                                                        )
                                                    }
                                                >
                                                    -
                                                </button>
                                            </>
                                        }
                                    </>
                                )}
                                <p>
                                    {data.name}Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry.{' '}
                                </p>
                            </Col>
                        </Row>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default ProductDetails;
