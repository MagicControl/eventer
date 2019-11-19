import { EventsListService } from '../EventsListService';

describe('EventsListService', () => {
    let api;
    let els;
    const mockData = {
        count: 100,
        results: [
            {
                id: '1',
                name: 'name',
                start_time: '11:11',
                finish_time: '12:12',
                logo_uri: 'some_uri',
                min_ticket_price: 123,
                max_ticket_price: 321,
                ticket_price_currency: 'USD',
                category: 'category',
                organizer: 'organizer',
            },
        ],
    };

    beforeEach(() => {
        api = {
            get: jest.fn(),
        };
        api.get.mockReturnValueOnce({ data: mockData });
        els = new EventsListService(api);
    });

    it('loads and returns events list', async () => {
        const result = await els.loadEvents();
        expect(api.get).toBeCalledWith('/events/search', undefined);
        expect(result).toEqual(mockData);
    });

    it('runs search and returns the result list', async () => {
        const query = { limit: 100, offset: 100 };
        const result = await els.loadEvents(query);
        expect(api.get).toBeCalledWith('/events/search', { params: query });
        expect(result).toEqual(mockData);
    });
});
