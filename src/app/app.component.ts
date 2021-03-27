import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    title = "codescape-financial-web";

    showHeaderFooter = false;
    showSidebar = false;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.showHeaderFooter = this.activatedRoute.firstChild?.snapshot.data.showHeaderFooter !== false;
                this.showSidebar = this.activatedRoute.firstChild?.snapshot.data.showSidebar !== false;
            }
        });
    }
}
