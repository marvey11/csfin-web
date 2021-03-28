import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { EvaluationService } from "src/app/core/http";
import { LoaderService } from "src/app/core/services";
import { PerformanceEvaluationItem, PerformanceInterval, SecurityType } from "src/app/shared/models";
import { securityTypeToString } from "src/app/shared/models/security.model";

@Component({
    selector: "app-performance",
    templateUrl: "./performance.component.html",
    styleUrls: ["./performance.component.css"]
})
export class PerformanceComponent implements OnInit {
    isLoading: BehaviorSubject<boolean> = this.loaderService.isLoading;

    performanceItems: PerformanceEvaluationItem[];

    intervals!: PerformanceInterval[];

    form!: FormGroup;

    intervalSelector!: FormControl;
    groupingToggle!: FormControl;

    constructor(private fb: FormBuilder, private service: EvaluationService, private loaderService: LoaderService) {
        this.performanceItems = [];
    }

    get groupingEnabled(): boolean {
        return this.groupingToggle.value;
    }

    get groupedItems(): Map<SecurityType, PerformanceEvaluationItem[]> {
        const mapping = new Map<SecurityType, PerformanceEvaluationItem[]>();

        for (const item of this.performanceItems) {
            const key = item.type;
            const value = mapping.get(key);

            if (value === undefined) {
                mapping.set(key, [item]);
            } else {
                value.push(item);
            }
        }

        return mapping;
    }

    getSortedItems(items: PerformanceEvaluationItem[]): PerformanceEvaluationItem[] {
        return items.sort((it1, it2) => it2.newestPrice / it2.basePrice - it1.newestPrice / it1.basePrice);
    }

    getPerformance(item: PerformanceEvaluationItem): number {
        return 100 * (item.newestPrice / item.basePrice - 1);
    }

    getLabel(itype: SecurityType, plural = false): string {
        return securityTypeToString(itype, plural);
    }

    loadPerformanceItems(interval: PerformanceInterval): void {
        this.performanceItems.length = 0;
        this.service.list(interval).subscribe((items: PerformanceEvaluationItem[]) => {
            for (const item of items) {
                this.performanceItems.push(item);
            }
        });
    }

    onChange(interval: PerformanceInterval): void {
        this.loadPerformanceItems(interval);
    }

    ngOnInit(): void {
        this.intervals = [
            { unit: "month", count: 3, label: "3 months" },
            { unit: "month", count: 6, label: "6 months" },
            { unit: "year", count: 1, label: "1 year" }
        ];

        const initialInterval = this.intervals[1];

        this.intervalSelector = new FormControl("");
        this.groupingToggle = new FormControl(true);

        this.form = this.fb.group({
            performanceInterval: this.intervalSelector,
            showGrouped: this.groupingToggle
        });
        this.form.controls.performanceInterval.setValue(initialInterval, { onlySelf: true });

        this.loadPerformanceItems(initialInterval);
    }
}
