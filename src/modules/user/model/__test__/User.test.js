import { User } from '../User';

describe('User', () => {
    let userService;
    let user;
    let storage;
    beforeEach(() => {
        userService = {
            getCurrentUser: jest.fn(),
            registerNewUser: jest.fn(),
            login: jest.fn(),
        };
        storage = {
            saveToken: jest.fn(),
            getToken: jest.fn(),
            removeToken: jest.fn(),
        };
        user = new User(userService, storage);
    });

    it('requests and stores user data', async () => {
        const data = { email: 'email', id: 'id' };
        userService.getCurrentUser.mockReturnValueOnce(data);
        await user.loadData();
        expect(user.email).toEqual(data.email);
    });

    it('registers a new user and stores data', async () => {
        const data = { email: 'email', id: 'id' };
        userService.getCurrentUser.mockReturnValueOnce(data);
        userService.registerNewUser.mockReturnValueOnce(data);
        await user.register({ email: 'email', password: 'password' });
        expect(user.email).toEqual(data.email);
    });

    it('logins and saves token', async () => {
        const email = 'email';
        const password = 'password';
        const token = '12345';
        userService.login.mockReturnValueOnce({ token });
        await user.login(email, password);
        expect(userService.login).toBeCalledWith(email, password);
        expect(storage.saveToken).toBeCalledWith(token);
        expect(user.token).toEqual(token);
    });

    it('clears token and removes it from the storage', () => {
        user.logout();
        expect(user.token).toBeNull();
        expect(storage.removeToken).toBeCalled();
    });
});
