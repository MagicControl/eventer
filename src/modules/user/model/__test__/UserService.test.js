import { UserService } from '../UserService';

describe('UserService', () => {
    let userService;
    let api;

    beforeEach(() => {
        api = {
            get: jest.fn(),
            post: jest.fn(),
        };
        userService = new UserService(api);
    });

    it('loads current user data from api', async () => {
        const data = { email: 'email', id: 'id' };
        api.get.mockReturnValueOnce({ data });
        const result = await userService.getCurrentUser();
        expect(api.get).toBeCalledWith('/users/me');
        expect(result).toEqual(data);
    });

    it('sends user data and returns created user', async () => {
        const data = { email: 'email', password: 'password' };
        api.post.mockReturnValueOnce({ data: { ...data, id: 1 } });
        const result = await userService.registerNewUser(
            data.email,
            data.password
        );
        expect(api.post).toBeCalledWith('/users/register', data);
        expect(result).toEqual({ ...data, id: 1 });
    });

    it('sends user credentials and returns a token', async () => {
        const data = { email: 'email', password: 'password' };
        api.post.mockReturnValueOnce({ data });
        const result = await userService.login(data.email, data.password);
        expect(api.post).toBeCalledWith('/users/token', {
            username: data.email,
            password: data.password,
        });
    });
});
