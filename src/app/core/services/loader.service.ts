import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LoaderService {
    isLoading = new BehaviorSubject<boolean>(false);

    show(): void {
        this.isLoading.next(true);
    }

    hide(): void {
        this.isLoading.next(false);
    }
}
