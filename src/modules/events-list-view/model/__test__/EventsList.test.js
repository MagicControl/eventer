import { EventsList } from '../EventsLists';

describe('EventsList', () => {
    const itemsPerPage = 20;
    let eventsList;
    let els;

    beforeEach(() => {
        els = {
            loadEvents: jest.fn(),
            search: jest.fn(),
        };
        eventsList = new EventsList(els, itemsPerPage);
    });

    it('loads data and sets pagination params', async () => {
        els.loadEvents.mockReturnValueOnce({
            count: 101,
            results: [1, 2, 3, 4, 5],
        });
        await eventsList.load();
        expect(eventsList.events).toEqual([1, 2, 3, 4, 5]);
        expect(eventsList.totalItems).toEqual(101);
        expect(eventsList.totalPages).toEqual(6);
        expect(eventsList.currentPage).toEqual(1);
    });

    it('loads new data after active page change', async () => {
        eventsList.setActivePage(2);
        expect(els.loadEvents).toBeCalledWith({
            offset: 20,
            limit: 20,
        });
    });

    it('does events search and resets pagination params', async () => {
        els.loadEvents.mockReturnValueOnce({
            count: 30,
            results: [1, 2, 3],
        });

        await eventsList.search('qwe', '123', '234');
        expect(eventsList.events).toEqual([1, 2, 3]);
        expect(eventsList.totalItems).toEqual(30);
        expect(eventsList.totalPages).toEqual(2);
        expect(eventsList.currentPage).toEqual(1);
    });
});
