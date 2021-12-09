import request from 'services/httpService';
class StoreService {
    getStores() {
        return request.get('/store');
    }

    getStoreById(id) {
        return request.get(`/store/${id}`);
    }

    addStore(body) {
        return request.post(`/store`, body);
    }

    updateStore(id, body) {
        return request.patch(`/store${id}`, body);
    }

    deleteStore(id) {
        return request.delete(`/store${id}`);
    }
}

export default new StoreService();
