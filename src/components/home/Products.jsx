import Product from 'components/common/Product';
import { Container, Row } from 'react-bootstrap';
import SkeletonMeterialUi from 'skeletons/skeletonMeterialUi';
const Products = ({ data, isLoading }) => {
    return (
        <Container>
            <Row>
                <h2>product title</h2>
                {isLoading && (
                    <Row>
                        <SkeletonMeterialUi loading={isLoading} />
                    </Row>
                )}
                {data?.map((product) => (
                    <Product key={product._id} product={product} />
                ))}
            </Row>
        </Container>
    );
};

export default Products;
