import { decorate, observable, action } from 'mobx';

export class User {
    constructor(userService, storage) {
        this.userService = userService;
        this.storage = storage;
        this.email = null;
        this.token = this.storage.getToken() || null;
    }

    async loadData() {
        const { id, email } = await this.userService.getCurrentUser();
        this.id = id;
        this.email = email;
    }

    async register(userEmail, userPassword) {
        const { email } = await this.userService.registerNewUser(
            userEmail,
            userPassword
        );
        this.email = email;
    }

    async login(userEmail, userPassword) {
        const { token } = await this.userService.login(userEmail, userPassword);
        this.email = userEmail;
        this.token = token;
        this.storage.saveToken(token);
    }

    logout() {
        this.token = null;
        this.email = null;
        this.storage.removeToken();
    }
}

decorate(User, {
    token: observable,
    email: observable,
    loadData: action,
});
