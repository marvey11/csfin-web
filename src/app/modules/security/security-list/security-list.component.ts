import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { SecurityService } from "src/app/core/http";
import { LoaderService } from "src/app/core/services";
import { Security } from "src/app/shared/models";
import { SecurityType, securityTypeToString } from "src/app/shared/models/security.model";

@Component({
    selector: "app-security-list",
    templateUrl: "./security-list.component.html",
    styleUrls: ["./security-list.component.css"]
})
export class SecurityListComponent implements OnInit {
    isLoading: BehaviorSubject<boolean> = this.loaderService.isLoading;

    securities: Security[];

    form!: FormGroup;

    groupingToggle!: FormControl;

    constructor(private service: SecurityService, private fb: FormBuilder, private loaderService: LoaderService) {
        this.securities = [];
    }

    get groupingEnabled(): boolean {
        return this.groupingToggle.value;
    }

    get groupedItems(): Map<SecurityType, Security[]> {
        const mapping = new Map<SecurityType, Security[]>();

        for (const item of this.securities) {
            const key = item.type;
            const value = mapping.get(key);

            if (value === undefined) {
                mapping.set(item.type, [item]);
            } else {
                value.push(item);
            }
        }

        return mapping;
    }

    getSortedItems(securities: Security[]): Security[] {
        return securities.sort((s1: Security, s2: Security) => s1.isin.localeCompare(s2.isin));
    }

    getLabel(itype: SecurityType, plural = false): string {
        return securityTypeToString(itype, plural);
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
        this.groupingToggle = new FormControl(true);

        this.form = this.fb.group({
            showGrouped: this.groupingToggle
        });

        this.loadSecurities();
    }
}
