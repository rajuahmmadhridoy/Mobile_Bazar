import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeToCart, updateQuantity } from 'redux/actions/cartActions';
import imgUrlParser from 'utils/imgUrlParser';
import { BiPlusMedical } from 'react-icons/bi';
import { FaMinus } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
const Cartitems = ({ pd, totalPrice }) => {
    // console.log(pd, totalPrice, 'pddd');
    const dispatch = useDispatch();
    return (
        <div className="cart_items_components">
            <Container>
                <div className="bg-white d-flex">
                    {pd?.qty === 0 ? (
                        <h1>There have not product</h1>
                    ) : (
                        <>
                            <div className="cart_items">
                                <img
                                    style={{ height: '80px', width: '80px' }}
                                    src={imgUrlParser(pd?.item.image)}
                                    alt=""
                                />
                                <h4>Price: {pd?.singleTotal}</h4>
                                <h4>Quantity: {pd?.qty}</h4>
                                <button
                                    onClick={() =>
                                        dispatch(updateQuantity({ pd: pd, type: 'minus' }))
                                    }
                                    className="border bg-primary text-white px-2"
                                >
                                    <FaMinus />
                                </button>
                                <button
                                    className="border bg-primary text-white px-2"
                                    onClick={() =>
                                        dispatch(updateQuantity({ pd: pd, type: 'plus' }))
                                    }
                                >
                                    <BiPlusMedical />
                                </button>
                                <button
                                    className="border bg-primary text-white px-2"
                                    onClick={() => dispatch(removeToCart({ pd: pd }))}
                                >
                                    <ImCross />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Cartitems;
