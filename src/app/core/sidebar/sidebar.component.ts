import { Component, OnInit } from "@angular/core";

type SidebarItem = {
    label: string;
    link: string;
};

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
    sidebarItems: SidebarItem[] = [];

    constructor() {}

    ngOnInit(): void {
        this.sidebarItems = [
            { label: "Exchanges", link: "/exchanges" },
            { label: "Securities", link: "/securities" },
            { label: "Performance Evaluation", link: "/evaluate/performance" }
        ];
    }
}
