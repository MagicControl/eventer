import { EventService } from '../EventService';

describe('EventService', () => {
    let es;
    let api;

    beforeEach(() => {
        api = {
            get: jest.fn(),
            patch: jest.fn(),
        };
        es = new EventService(api);
    });

    it('gets event by id', () => {
        es.getEventById('id');
        expect(api.get).toBeCalledWith('/events/id');
    });

    it('makes a request to update an event', () => {
        es.updateEvent('id', { name: 'new name' });
        expect(api.patch).toBeCalledWith('/events/id', { name: 'new name' });
    });
});
