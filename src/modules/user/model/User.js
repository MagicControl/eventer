import { decorate, observable, action } from 'mobx';

export class User {
    constructor(userService) {
        this.id = null;
        this.email = null;
        this.userService = userService;
    }

    async loadData() {
        const { id, email } = await this.userService.getCurrentUser();
        this.id = id;
        this.email = email;
    }

    async register(userEmail, userPassword) {
        const { id, email } = await this.userService.registerNewUser(
            userEmail,
            userPassword
        );
        this.id = id;
        this.email = email;
    }
}

decorate(User, {
    id: observable,
    email: observable,
    loadData: action,
});
