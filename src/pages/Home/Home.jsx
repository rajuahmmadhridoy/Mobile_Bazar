import Footer from 'components/common/Footer';
import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import useAsync from 'hooks/useAsync';
// import { useEffect, useState } from 'react';
import ProductService from 'services/ProductService';

const Home = () => {
    //    const [data,setData] = useState([])
    //     useEffect(()=>{
    //         ProductService.getProducts()
    //         .then(response => setData(response))
    //     },[])
    const { data, isLoading } = useAsync(ProductService.getProducts);
    return (
        <div>
            <Banner></Banner>
            <Products isLoading={isLoading} data={data}></Products>
            <Footer />
        </div>
    );
};

export default Home;
