import { decorate, observable, action } from 'mobx';

export class User {
    constructor(userService) {
        this.token = null;
        this.email = null;
        this.userService = userService;
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
    }

    logout() {
        this.token = null;
        this.email = null;
    }
}

decorate(User, {
    token: observable,
    email: observable,
    loadData: action,
});
