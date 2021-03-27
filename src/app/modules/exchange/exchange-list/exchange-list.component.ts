import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ExchangeService } from "src/app/core/http";
import { LoaderService } from "src/app/core/services";
import { Exchange } from "src/app/shared/models";

@Component({
    selector: "app-exchange-list",
    templateUrl: "./exchange-list.component.html",
    styleUrls: ["./exchange-list.component.css"]
})
export class ExchangeListComponent implements OnInit {
    isLoading: BehaviorSubject<boolean> = this.loaderService.isLoading;

    exchangesObs$!: Observable<Exchange[]>;

    constructor(private service: ExchangeService, private loaderService: LoaderService) {}

    loadExchanges(): void {
        this.exchangesObs$ = this.service.list();
    }

    ngOnInit(): void {
        this.loadExchanges();
    }
}
