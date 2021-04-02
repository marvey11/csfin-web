import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { EvaluationService } from "src/app/core/http";
import { LoaderService, StatusService } from "src/app/core/services";
import { RSLevyAlgorithm, RSLevyResponseItem, SecurityType, StatusType } from "src/app/shared/models";
import { securityTypeToString } from "src/app/shared/models/security.model";

@Component({
    selector: "app-rs-levy",
    templateUrl: "./rs-levy.component.html",
    styleUrls: ["./rs-levy.component.css"]
})
export class RSLevyComponent implements OnInit {
    isLoading!: BehaviorSubject<boolean>;

    rslResponseItems: RSLevyResponseItem[];

    algorithms!: RSLevyAlgorithm[];

    form!: FormGroup;
    algorithmSelector!: FormControl;
    groupingToggle!: FormControl;

    constructor(
        private service: EvaluationService,
        private statusService: StatusService,
        private loaderService: LoaderService,
        private fb: FormBuilder
    ) {
        this.rslResponseItems = [];
    }

    get groupingEnabled(): boolean {
        return this.groupingToggle.value.showGrouped;
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

    loadRSLevyResponses(algorithm: RSLevyAlgorithm): void {
        this.statusService.reset();

        this.rslResponseItems.length = 0;
        this.service.getRSLevyData(algorithm).subscribe(
            (items: RSLevyResponseItem[]) => {
                for (const item of items) {
                    this.rslResponseItems.push(item);
                }
            },
            (error) => {
                this.statusService.update(StatusType.error, error, "ERROR");
            }
        );
    }

    onChange(algorithm: RSLevyAlgorithm): void {
        this.loadRSLevyResponses(algorithm);
    }

    ngOnInit(): void {
        this.isLoading = this.loaderService.isLoading;

        this.algorithms = [
            { algorithm: "daily", label: "Latest day / 200 days average" },
            { algorithm: "weekly", label: "Latest week / 27 weeks average" }
        ];

        const initialAlgorithm = this.algorithms[1];

        this.algorithmSelector = new FormControl("");
        this.groupingToggle = new FormControl({ showGrouped: true });

        this.form = this.fb.group({
            levyAlgorithm: this.algorithmSelector,
            showGrouped: this.groupingToggle
        });
        this.form.controls.levyAlgorithm.setValue(initialAlgorithm, { onlySelf: true });

        this.loadRSLevyResponses(initialAlgorithm);
    }
}
