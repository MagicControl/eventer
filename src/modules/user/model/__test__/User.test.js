import { User } from '../User';

describe('User', () => {
    let userService;
    let user;
    beforeEach(() => {
        userService = {
            getCurrentUser: jest.fn(),
            registerNewUser: jest.fn(),
        };
        user = new User(userService);
    });

    it('requests and stores user data', async () => {
        const data = { email: 'email', id: 'id' };
        userService.getCurrentUser.mockReturnValueOnce(data);
        await user.loadData();
        expect(user.email).toEqual(data.email);
        expect(user.id).toEqual(data.id);
    });

    it('registers a new user and stores data', async () => {
        const data = { email: 'email', id: 'id' };
        userService.getCurrentUser.mockReturnValueOnce(data);
        userService.registerNewUser.mockReturnValueOnce(data);
        await user.register({ email: 'email', password: 'password' });
        expect(user.email).toEqual(data.email);
        expect(user.id).toEqual(data.id);
    });
});
