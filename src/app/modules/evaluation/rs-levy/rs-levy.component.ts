import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { EvaluationService } from "src/app/core/http";
import { LoaderService } from "src/app/core/services";
import { RSLevyResponseItem, SecurityType } from "src/app/shared/models";
import { securityTypeToString } from "src/app/shared/models/security.model";

@Component({
    selector: "app-rs-levy",
    templateUrl: "./rs-levy.component.html",
    styleUrls: ["./rs-levy.component.css"]
})
export class RSLevyComponent implements OnInit {
    isLoading: BehaviorSubject<boolean> = this.loaderService.isLoading;

    rslResponseItems: RSLevyResponseItem[];

    form!: FormGroup;
    groupingToggle!: FormControl;

    constructor(private fb: FormBuilder, private service: EvaluationService, private loaderService: LoaderService) {
        this.rslResponseItems = [];
    }

    get groupingEnabled(): boolean {
        return this.groupingToggle.value;
    }

    get groupedItems(): Map<SecurityType, RSLevyResponseItem[]> {
        const mapping = new Map<SecurityType, RSLevyResponseItem[]>();

        for (const item of this.rslResponseItems) {
            const key = item.itype;
            const value = mapping.get(key);

            if (value === undefined) {
                mapping.set(key, [item]);
            } else {
                value.push(item);
            }
        }

        return mapping;
    }

    getSortedItems(items: RSLevyResponseItem[]): RSLevyResponseItem[] {
        return items.sort((it1, it2) => it2.rslValue - it1.rslValue);
    }

    getLevyPercent(item: RSLevyResponseItem): number {
        return 100 * item.rslValue;
    }

    getLabel(itype: SecurityType, plural = false): string {
        return securityTypeToString(itype, plural);
    }

    loadRSLevyResponses(): void {
        this.rslResponseItems.length = 0;
        this.service.getRSLevyData().subscribe((items: RSLevyResponseItem[]) => {
            for (const item of items) {
                this.rslResponseItems.push(item);
            }
        });
    }

    ngOnInit(): void {
        this.groupingToggle = new FormControl(true);

        this.form = this.fb.group({
            showGrouped: this.groupingToggle
        });

        this.loadRSLevyResponses();
    }
}
