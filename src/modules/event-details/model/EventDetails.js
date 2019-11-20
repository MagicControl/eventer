import { decorate, action, observable } from 'mobx';

export class EventDetails {
    constructor(eventService) {
        this.eventService = eventService;
        this.data = null;
    }

    updateName(value) {
        this.data.name = value;
    }

    updateField(name, value) {
        this.data[name].name = value;
    }

    async loadData(id) {
        this.data = null;
        this.data = await this.eventService.getEventById(id);
    }

    async applyUpdates(token) {
        const { id, ...data } = this.data;
        await this.eventService.updateEvent(id, data, token);
    }
}

decorate(EventDetails, {
    data: observable,
    loadData: action,
    updateName: action,
    updateField: action,
});
