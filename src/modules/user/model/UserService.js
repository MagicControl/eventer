export class UserService {
    constructor(api) {
        this.api = api;
    }

    async getCurrentUser() {
        const { data } = await this.api.get('/users/me');
        return data;
    }

    async registerNewUser(email, password) {
        const { data } = await this.api.post('/users/register', {
            email,
            password,
        });
        return data;
    }
}
