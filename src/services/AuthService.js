import request from 'services/httpService';
class AuthService {
    login(body) {
        return request.post('/auth/login', body);
    }

    logout() {
        return request.get('/auth/logout');
    }
}

export default new AuthService();
