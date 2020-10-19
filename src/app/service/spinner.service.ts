import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {

    constructor() { }

    public isLoading = false;
    public start() {
        this.isLoading = true;
    }
    public stop() {
        this.isLoading = false;
    }

}
