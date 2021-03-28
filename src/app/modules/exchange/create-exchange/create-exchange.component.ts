import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ExchangeService } from "src/app/core/http";
import { Exchange } from "src/app/shared/models";

@Component({
    selector: "app-create-exchange",
    templateUrl: "./create-exchange.component.html",
    styleUrls: ["./create-exchange.component.css"]
})
export class CreateExchangeComponent implements OnInit {
    form!: FormGroup;

    constructor(private service: ExchangeService, private fb: FormBuilder) {}

    get isButtonDisabled(): boolean {
        return !this.form.valid;
    }

    get exchangeName(): AbstractControl | null {
        return this.form.get("exchangeName");
    }

    onSubmit(): void {
        const exchange = new Exchange(-1, this.exchangeName?.value);
        this.service.create(exchange).subscribe(() => {
            this.form.reset();
        });
    }

    ngOnInit(): void {
        this.form = this.fb.group({
            exchangeName: new FormControl("", [Validators.minLength(3), Validators.required])
        });
    }
}