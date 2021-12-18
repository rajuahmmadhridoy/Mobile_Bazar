import request from 'services/httpService';
class AuthService {
    login(body) {
        console.log(body, 123456);
        return request.post('/auth/login', body);
    }

    logout() {
        return request.get('/auth/logout');
    }
}

export default new AuthService();
