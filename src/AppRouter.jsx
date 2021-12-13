import ProductDetails from 'pages/Productdetails/ProductDetails';
import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home/Home'));
const Checkout = React.lazy(() => import('pages/Checkout/Checkout'));
const AppRouter = (props) => {
    return (
        <Suspense fallback={<h1>Loading posts...</h1>}>
            <BrowserRouter>
                {props.children}
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default AppRouter;
