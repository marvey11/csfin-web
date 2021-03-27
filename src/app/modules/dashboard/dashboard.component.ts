import { Component, OnInit } from "@angular/core";

type CardContent = {
    header: string;
    description: string;
    link: string;
};

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
    dashboardCards: CardContent[] = [];

    constructor() {}

    ngOnInit(): void {
        this.dashboardCards = [
            { header: "Exchanges", description: "Manage exchanges.", link: "/exchanges" },
            { header: "Securities", description: "Manage securities and their metadata.", link: "/securities" }
        ];
    }
}
