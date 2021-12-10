import ProductDetails from 'components/home/ProductDetails';
import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
const Home = React.lazy(() => import('./pages/Home'));
const AppRouter = (props) => {
    return (
        <Suspense fallback={<h1>Loading posts...</h1>}>
            <BrowserRouter>
                {props.children}
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default AppRouter;
