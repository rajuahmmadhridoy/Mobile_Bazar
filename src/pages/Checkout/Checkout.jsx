import Cartitems from 'components/checkout/Cartitems';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const [product, setProduct] = useState([]);
    const cartData = useSelector((state) => state.cartReducers.cart);
    useEffect(() => {
        setTimeout(() => {
            const productArray = [];
            for (const pd in cartData.items) {
                productArray.push(cartData.items[pd]);
            }
            setProduct(productArray);
        }, 500);
    }, []);
    return (
        <div>
            {product?.map((pd) => (
                <Cartitems totalPrice={cartData.totalPrice} pd={pd} key={pd._id}></Cartitems>
            ))}
        </div>
    );
};

export default Checkout;
