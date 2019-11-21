import { EventDetails } from '../EventDetails';

describe('Event', () => {
    let es;
    let eventInstance;

    beforeEach(() => {
        es = {
            getEventById: jest.fn(),
            updateEvent: jest.fn(),
        };

        eventInstance = new EventDetails(es);
    });

    it('loads event data', async () => {
        const mockData = { id: 'id', name: 'name' };
        es.getEventById.mockReturnValueOnce(mockData);
        await eventInstance.loadData('id');
        expect(es.getEventById).toBeCalledWith('id');
        expect(eventInstance.data).toEqual(mockData);
    });

    it('updates an event', async () => {
        const mockData = { id: 'id', name: 'name' };
        es.getEventById.mockReturnValueOnce(mockData);
        await eventInstance.loadData('id');
        eventInstance.data.name = 'new name';
        await eventInstance.applyUpdates(123);
        expect(es.updateEvent).toBeCalledWith('id', { name: 'new name' }, 123);
    });
});
