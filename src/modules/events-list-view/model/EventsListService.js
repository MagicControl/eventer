export class EventsListService {
    constructor(api) {
        this.api = api;
    }

    async loadEvents(query) {
        const searchParams = query
            ? {
                  params: query,
              }
            : undefined;
        const { data } = await this.api.get('/events/search', searchParams);
        return data;
    }
}
