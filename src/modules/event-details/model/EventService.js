export class EventService {
    constructor(api) {
        this.api = api;
    }

    async getEventById(id) {
        const { data } = await this.api.get(`/events/${id}`);
        return data;
    }

    async updateEvent(id, eventData, token) {
        const { data } = await this.api.patch(`/events/${id}`, eventData, {
            headers: {
                Authorization: `Token ${token}`,
            },
        });
        return data;
    }
}
