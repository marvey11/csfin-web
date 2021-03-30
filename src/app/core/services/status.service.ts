import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { StatusMessage, StatusType } from "src/app/shared/models";

@Injectable({
    providedIn: "root"
})
export class StatusService {
    statusSubject: BehaviorSubject<StatusMessage>;

    constructor() {
        this.statusSubject = new BehaviorSubject<StatusMessage>(new StatusMessage());
    }

    update(type: StatusType, message: string, label?: string) {
        this.statusSubject.next(new StatusMessage(type, message, label));
    }

    reset(): void {
        this.statusSubject.next(new StatusMessage());
    }
}
