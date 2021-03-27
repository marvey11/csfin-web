import { Component, Input, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LoaderService } from "src/app/core/services";

@Component({
    selector: "app-loader",
    templateUrl: "./loader.component.html",
    styleUrls: ["./loader.component.css"]
})
export class LoaderComponent implements OnInit {
    @Input() message?: string;

    isLoading: BehaviorSubject<boolean> = this.service.isLoading;

    constructor(private service: LoaderService) {}

    ngOnInit(): void {}
}
