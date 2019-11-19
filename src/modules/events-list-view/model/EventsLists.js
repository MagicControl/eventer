import { decorate, observable, action } from 'mobx';

export class EventsList {
    constructor(eventsListService, itemsPerPage = 20) {
        this.eventsListService = eventsListService;
        this.itemsPerPage = itemsPerPage;
        this.totalItems = null;
        this.events = null;
        this.currentPage = 1;
    }

    get totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    }

    get queryParams() {
        return {
            offset: this.itemsPerPage * this.currentPage,
            limit: this.itemsPerPage,
        };
    }

    async load() {
        const { count, results } = await this.eventsListService.loadEvents();
        this.totalItems = count;
        this.events = results;
        this.currentPage = 1;
    }

    async setActivePage(pageNumber) {
        this.currentPage = pageNumber;
        const { result } = await this.eventsListService.loadEvents(
            this.queryParams
        );
        this.events = result;
    }
}

decorate(EventsList, {
    totalItems: observable,
    events: observable,
    load: action,
    setActivePage: action,
});
