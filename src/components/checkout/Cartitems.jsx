import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { incrementToCart } from 'redux/actions/cartActions';

const Cartitems = ({ pd, totalPrice }) => {
    console.log(pd.qty, totalPrice, 'pd');
    const dispatch = useDispatch();
    return (
        <div>
            <Container>
                <div className="bg-white d-flex">
                    <button
                        className="border bg-primary text-white px-5"
                        onClick={() => dispatch(incrementToCart(1))}
                    >
                        +
                    </button>{' '}
                    <h1>Price:{totalPrice} Quantity:</h1>{' '}
                    <button className="border bg-primary text-white px-5">-</button>
                </div>
            </Container>
        </div>
    );
};

export default Cartitems;
