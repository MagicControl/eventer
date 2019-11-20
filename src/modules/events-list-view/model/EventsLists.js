import { decorate, observable, action } from 'mobx';

export class EventsList {
    constructor(eventsListService, itemsPerPage = 20) {
        this.eventsListService = eventsListService;
        this.itemsPerPage = itemsPerPage;
        this.totalItems = null;
        this.events = null;
        this.currentPage = 1;
        this.searchParams = null;
    }

    get totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    }

    get paginationParams() {
        return {
            offset: this.itemsPerPage * (this.currentPage - 1),
            limit: this.itemsPerPage,
        };
    }

    async load() {
        const { count, results } = await this.eventsListService.loadEvents(
            this.paginationParams
        );
        this.totalItems = count;
        this.events = results;
        this.currentPage = 1;
    }

    async setActivePage(pageNumber) {
        this.currentPage = pageNumber;
        const { results } = await this.eventsListService.loadEvents({
            ...this.paginationParams,
            ...this.searchParams,
        });
        this.events = results;
    }

    async search(searchString, minDate, maxDate) {
        this.searchParams = {
            search: searchString,
            min_start_time: minDate,
            max_start_time: maxDate,
        };
        const { count, results } = await this.eventsListService.loadEvents(
            this.searchParams
        );
        this.totalItems = count;
        this.events = results;
        this.currentPage = 1;
    }
}

decorate(EventsList, {
    totalItems: observable,
    events: observable,
    searchParams: observable,
    load: action,
    setActivePage: action,
    search: action,
});
