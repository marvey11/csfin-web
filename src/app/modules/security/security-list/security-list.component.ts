import { stringify } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { SecurityService } from "src/app/core/http";
import { Security } from "src/app/shared/models";
import { SecurityType } from "src/app/shared/models/security.model";

@Component({
    selector: "app-security-list",
    templateUrl: "./security-list.component.html",
    styleUrls: ["./security-list.component.css"]
})
export class SecurityListComponent implements OnInit {

    securities: Security[] = [];

    /** Whether or not to group securities by type. */
    groupingEnabled = true;

    /** The group label that's displayed in the table when securities are grouped. */
    groupLabels: Map<SecurityType, string>;

    /** The label that's used for the type in the ungrouped display. */
    typeLabels: Map<SecurityType, string>;

    constructor(private service: SecurityService) {
        this.groupLabels = new Map<SecurityType, string>([
            [SecurityType.STOCK, "Stocks"],
            [SecurityType.ETF, "ETFs"]
        ]);
        this.typeLabels = new Map<SecurityType, string>([
            [SecurityType.STOCK, "Stock"],
            [SecurityType.ETF, "ETF"]
        ]);
    }

    toggleGrouping(): void {
        this.groupingEnabled = !this.groupingEnabled;
    }

    get groupedSecurities(): Map<SecurityType, Security[]> {
        const mapping: Map<SecurityType, Security[]> = new Map<SecurityType, Security[]>();

        for (const s of this.securities) {
            const secs = mapping.get(s.type);
            if (secs === undefined) {
                mapping.set(s.type, [s]);
            } else {
                secs.push(s);
            }
        }

        return mapping;
    }

    getSorted(securities: Security[]): Security[]{
        return securities.sort((s1: Security, s2: Security) => s1.isin.localeCompare(s2.isin));
    }

    loadSecurities(): void {
        this.securities.length = 0;
        this.service.list().subscribe((securities: Security[]) => {
            for (const s of securities) {
                this.securities.push(s);
            }
        });
    }

    ngOnInit(): void {
        this.loadSecurities();
    }
}
