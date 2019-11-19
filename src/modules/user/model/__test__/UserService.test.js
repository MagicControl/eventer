import { UserService } from '../UserService';
import mockApi from '../../../api/__mocks__';

describe('UserService', () => {
    it('loads current user data from api', async () => {
        const data = { email: 'email', id: 'id' };
        const api = mockApi({ data });
        const get = jest.spyOn(api, 'get');
        const userService = new UserService(api);
        const result = await userService.getCurrentUser();
        expect(get).toBeCalledWith('/users/me');
        expect(result).toEqual(data);
    });

    it('sends user data and returns created user', async () => {
        const data = { email: 'email', password: 'password' };
        const api = mockApi({ data: { ...data, id: 1 } });
        const post = jest.spyOn(api, 'post');
        const userService = new UserService(api);
        const result = await userService.registerNewUser(
            data.email,
            data.password
        );
        expect(post).toBeCalledWith('/users/register', data);
        expect(result).toEqual({ ...data, id: 1 });
    });
});
