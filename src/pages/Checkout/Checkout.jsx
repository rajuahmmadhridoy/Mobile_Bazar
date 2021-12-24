import Cartitems from 'components/checkout/Cartitems';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const [product, setProduct] = useState([]);
    const cartData = useSelector((state) => state.cartReducers.cart);
    // console.log(cartData,'cartData')
    useEffect(() => {
        setTimeout(() => {
            const productArray = [];
            for (const pd in cartData?.items) {
                productArray.push(cartData.items[pd]);
            }
            setProduct(productArray);
        }, 500);
    }, [product]);
    return (
        <div>
            {product?.map((pd) => (
                <Cartitems pd={pd} key={pd._id} totalPrice={cartData.totalPrice}></Cartitems>
            ))}
        </div>
    );
};

export default Checkout;
