import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { incrementToCart } from 'redux/actions/cartActions';

const Cartitems = ({ pd, totalPrice }) => {
    console.log(pd.qty, totalPrice, pd.item._id, pd, 'pd');
    const dispatch = useDispatch();
    return (
        <div>
            <Container>
                <div className="bg-white d-flex">
                    {totalPrice === null ? (
                        <></>
                    ) : (
                        <>
                            <button
                                className="border bg-primary text-white px-5"
                                onClick={() => dispatch(incrementToCart({ pd: pd, type: 'plus' }))}
                            >
                                +
                            </button>
                            <h1>Price:{totalPrice} Quantity:</h1>{' '}
                            <button
                                onClick={() => dispatch(incrementToCart({ pd: pd, type: 'minus' }))}
                                className="border bg-primary text-white px-5"
                            >
                                -
                            </button>
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Cartitems;
