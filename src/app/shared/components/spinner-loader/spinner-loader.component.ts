import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LoaderService } from "src/app/core/services";

@Component({
    selector: "app-spinner-loader",
    templateUrl: "./spinner-loader.component.html",
    styleUrls: ["./spinner-loader.component.css"]
})
export class SpinnerLoaderComponent implements OnInit {
    isLoading: BehaviorSubject<boolean> = this.service.isLoading;

    constructor(private service: LoaderService) {}

    ngOnInit(): void {}
}
