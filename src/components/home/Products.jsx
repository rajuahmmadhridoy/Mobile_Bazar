import Product from 'components/common/Product';
import { Container, Row } from 'react-bootstrap';

const Products = ({ data }) => {
    return (
        <Container>
            <Row>
                <h2>product title</h2>
                {/* {product?.map((pd) =>(<Product pd={pd} key={pd._id}/>))} */}
                {data?.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </Row>
        </Container>
    );
};

export default Products;
