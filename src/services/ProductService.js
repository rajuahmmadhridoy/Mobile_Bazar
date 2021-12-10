import request from 'services/httpService';
class ProductService {
    getProducts() {
        return request.get('/product');
    }

    getProductById(id) {
        console.log(id, 123);
        return request.get(`/product/${id}`);
    }

    addProduct(body) {
        return request.post(`/product`, body);
    }

    updateProduct(id, body) {
        return request.patch(`/product${id}`, body);
    }

    deleteProduct(id) {
        return request.delete(`/product${id}`);
    }
}

export default new ProductService();
