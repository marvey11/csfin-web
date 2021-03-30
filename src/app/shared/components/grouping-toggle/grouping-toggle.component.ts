import { Component, forwardRef, OnDestroy, OnInit } from "@angular/core";
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Subscription } from "rxjs";

export interface GroupingToggleValues {
    showGrouped: boolean;
}

@Component({
    selector: "app-grouping-toggle",
    templateUrl: "./grouping-toggle.component.html",
    styleUrls: ["./grouping-toggle.component.css"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => GroupingToggleComponent),
            multi: true
        }
    ]
})
export class GroupingToggleComponent implements ControlValueAccessor, OnInit, OnDestroy {
    form!: FormGroup;

    subscriptions: Subscription[];

    constructor(private fb: FormBuilder) {
        this.subscriptions = [];
    }

    set value(value: GroupingToggleValues) {
        this.form.setValue(value);
        this.onChange(value);
        this.onTouched();
    }

    get value(): GroupingToggleValues {
        console.log(JSON.stringify(this.form.value));
        return this.form.value;
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            showGrouped: true
        });

        this.subscriptions.push(
            this.form.valueChanges.subscribe((value: GroupingToggleValues) => {
                this.onChange(value);
                this.onTouched();
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }

    onChange: any = () => {};
    onTouched: any = () => {};

    registerOnChange(fn: (value: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    writeValue(value: GroupingToggleValues): void {
        if (value) {
            this.value = value;
        }
    }
}
